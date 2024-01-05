import React, { useRef, useState } from 'react';
import { useToast } from '../../../../store/providers/toast-provider';
import CropModal from './crop-modal';
import { useDispatch, useSelector } from 'react-redux';
import './profile-photo.scss';
import { Button, Col, Row } from 'react-bootstrap';
import { Image as FullImage } from 'primereact/image';
import { LiaUserCheckSolid, LiaUserTimesSolid } from "react-icons/lia";
import { deleteProfilePhoto, updateProfilePhoto } from '../../../../api/user-service';
import { updateUser } from '../../../../store/slices/auth-slice';
import { PiArrowCounterClockwise, PiCameraSlashBold, PiUserSwitchFill } from "react-icons/pi";
import { sideContent } from '../../../../helpers/config/side-content';
import { prettyConfirm } from '../../../../helpers/function/toast-confirm';


const ProfilePhoto = () => {
  const [selected, setSelected] = useState(null);
  const [cropped, setCropped] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector(state => state.auth);
  const { showToast } = useToast();
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelected(URL.createObjectURL(file));
      setShowModal(true);
    }
  };

  const handleEdit = () => {
    if (cropped) {
      setSelected(URL.createObjectURL(cropped));
    } else if (user.profilePhoto) {
      const binaryData = Uint8Array.from(atob(user.profilePhoto.data), (c) => c.charCodeAt(0));
      const blob = new Blob([binaryData], { type: 'image/jpeg' });
      const objectURL = URL.createObjectURL(blob);
      setSelected(objectURL);
    }
    setShowModal(true);
  };

  const handleUpdate = async () => {
    if (cropped) {
      const maxSize = 3 * 1024 * 1024; // 3 MB
      if (cropped.size > maxSize) {
        showToast({
          severity: "error",
          summary: "Oversize",
          detail: "Maximum file size is 3 MB",
          life: 1500,
        });
      } else {
        try {
          setLoading(true);
          const formData = new FormData();
          formData.append("photo", cropped);
          const resp = await updateProfilePhoto(formData);
          dispatch(updateUser(resp));
          setCropped(null);
          showToast({
            severity: "success",
            summary: "Updated",
            detail: "You have updated your profile photo",
            icon: <LiaUserCheckSolid size={50} />,
            life: 1500,
          });
        } catch (error) {
          showToast({
            severity: "error",
            summary: "Error!",
            detail: Object.values(error.response.data)[0],
            life: 1500,
          });
        } finally {
          setLoading(false);
        }
      }
    } else {
      showToast({
        severity: "error",
        summary: "Error",
        detail: "You have not selected any image",
        life: 1500,
      });
    }
  };

  const removeConfirm = (event) => {
    prettyConfirm({
      event: event,
      message: 'Are you sure you want to delete the profile photo?',
      icon: <PiCameraSlashBold size={50} />,
      acceptButtonType: 'danger',
      handleAccept: () => handleDelete(),
    });
  }

  const handleDelete = async () => {
    try {
      const resp = await deleteProfilePhoto();
      dispatch(updateUser(resp));
      setCropped(null);
      showToast({
        severity: "success",
        summary: "Deleted",
        detail: "You have deleted your profile photo",
        icon: <LiaUserTimesSolid size={50} />,
        life: 1500,
      });
    } catch (error) {
      showToast({
        severity: "error",
        summary: "Error!",
        detail: Object.values(error.response.data)[0],
        life: 1500,
      });
    }
  };

  const handleReset = () => {
    setCropped(null);
  };

  const handleHideModal = () => {
    fileInputRef.current.value = null;
    setSelected(null);
    setShowModal(false);
  };

  return (
    <>
      <div className='profile-photo-container'>
        <Row>
          <Col xs={12} lg={7} className='p-0'>
            <div className='profile-photo-main'>
              <div className="photo-wrapper">
                <FullImage
                  src={
                    cropped
                      ?
                      URL.createObjectURL(cropped)
                      :
                      user.profilePhoto
                        ? `data:${user?.profilePhoto?.type};base64, ${user?.profilePhoto?.data}`
                        : '/images/profile/user.jpg'
                  }
                  className='profile-thumbnail'
                  alt="profile-image"
                  preview
                />
                <Button className="reset-button" onClick={handleReset} disabled={!cropped} title="Reset">
                  <PiArrowCounterClockwise size={25} strokeWidth={1.5} />
                </Button>
                <Button className="remove-button" onClick={removeConfirm} disabled={!user.profilePhoto} title="Remove">
                  <PiCameraSlashBold size={25} strokeWidth={1.5} />
                </Button>
              </div>
              <div className="profile-photo-buttons">
                <div className="wrapper">
                  <Button className="select-button" onClick={() => fileInputRef.current.click()}>
                    SELECT
                  </Button>
                  <Button className="edit-button" onClick={handleEdit} disabled={!user.profilePhoto && !cropped}>
                    EDIT
                  </Button>
                </div>
                <label className="file-input">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>
                <Button className="save-button" variant="secondary" onClick={handleUpdate} disabled={loading || !cropped}>
                  <PiUserSwitchFill size={20} strokeWidth={1.5} />
                  SAVE
                </Button>
              </div>
            </div >
          </Col>
          <Col xs={12} lg={5} className='p-0'>
            <div className='profile-photo-side'>
              {
                sideContent.profilePhoto.map((item, index) => (
                  <div className="profile-photo-side-item" key={index}>
                    <div className="profile-photo-side-item-icon" style={item.iconStyle}>
                      {item.icon}
                    </div>
                    <div className="profile-photo-side-item-text">
                      {item.text}
                    </div>
                  </div>
                ))
              }
            </div>
          </Col>
        </Row>
      </div>
      <CropModal
        baseImage={selected}
        onCrop={setCropped}
        show={showModal}
        onHide={handleHideModal}
      />
    </>
  );
};

export default ProfilePhoto;
