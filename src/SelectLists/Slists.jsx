import React from 'react';
import { useState } from 'react';

function Slists() {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');

  const handleOptionChange1 = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleOptionChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };


  const handleOptionChange3 = (e) => {
    setSelectedOption3(e.target.value);
  };

  const handleOptionChange4 = (e) => {
    setSelectedOption4(e.target.value);
  };

 
  const handleSubmit = (e) =>{
       e.preventDefault();
     if ( selectedOption1 === 'سجل الحضور' && selectedOption2 ==='الهندسة الكهربية' && selectedOption3 ==='حاسبات' && selectedOption4 === 'الفرقة الثالثة'){
        window.location.href = '/attendance-record';
     }
     else if ( selectedOption1 === 'سجل درجات اعمال السنة' && selectedOption2 ==='الهندسة الكهربية' && selectedOption3 ==='حاسبات' && selectedOption4 === 'الفرقة الثالثة'){
      window.location.href = '/student-grade';
   }
   else{
     alert('the page not found');
   }
  };
  return (
    <div className ="container">
      <h1>
        <b>Student Lists</b>
      </h1>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="ltype">Choose ListType:</label>
        <input list="ltypes" name="ltype" id="ltype" value={selectedOption1} onChange={handleOptionChange1}/>
        <datalist id="ltypes">
          <option value="سجل الحضور" />
          <option value="سجل درجات اعمال السنة" />
        </datalist>

        <label htmlFor ="departement">Choose the department:</label>
        <input list="departements" name="departement" id="departement" value={selectedOption2} onChange={handleOptionChange2}/>
        <datalist id="departements">
          <option value="الهندسة الكهربية" />
          <option value="الهندسة المعمارية" />
          <option value="الهندسة المدنية" />
        </datalist>

        <label htmlFor ="division">Choose the division:</label>
        <input list="divisions" name="division" id="division" value={selectedOption3} onChange={handleOptionChange3}/>
        <datalist id="divisions">
          <option value="حاسبات" />
          <option value="اتصالات" />
          <option value="قوى والات" />
        </datalist>

        <label htmlFor="academicyear">Academic Year :</label>
        <input list="AYear" name="academicyear" id="academicyear"value={selectedOption4} onChange={handleOptionChange4}/>
        <datalist id="AYear">
          <option value="الفرقة الاعدادية" />
          <option value="الفرقة الاولى" />
          <option value="الفرقة الثانية" />
          <option value="الفرقة الثالثة" />
          <option value="الفرقة الرابعة" />
        </datalist>
        <br/>
        <button type="submit"> Display </button>
      </form>
        
    </div>
  );
};

export default Slists;
