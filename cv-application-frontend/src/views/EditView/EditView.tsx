import React, {useState} from "react";
import Row from "react-bootstrap/esm/Row";
import {TopPanel} from "../../components/TopPanel/TopPanel";
import {EditButtons} from "../../components/EditView/EditButtons/EditButtons";
import {useForm} from 'react-hook-form';
import {Form} from '../../components/EditView/Form/Form';
import './EditView.css';
import axios from "axios";

export const EditView = () => {
  const [showModal, setShowModal] = useState(false);



  const handleShow = () => setShowModal(true);
  const handleHide = () => setShowModal(false);


  return (
    <div>
      <TopPanel>
        <EditButtons showModal={() => handleShow()} />
      </TopPanel>
      <Row className="flex w-full justify-center overflow-y-scroll formSection">
      <Form modalShown={showModal} hideModal={() => handleHide()} />
      </Row>
    </div>
  );
};
