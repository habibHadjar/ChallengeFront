import React, { useEffect } from 'react';
import StudentUi from "./Student.ui";
import {TStudent} from "./Student.types";
import api from 'modules/Api/api';

const Student: TStudent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.post('./student/signing'); 
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return <StudentUi/>;
}

export default Student;
