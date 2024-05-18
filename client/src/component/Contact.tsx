import axios from 'axios';
import axiosInstance from './axioConfig/axiosinstance';
import React, { ChangeEvent, useState } from 'react'

interface  Input {
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    message: string;
}

interface Iformat {
    emailError: string | null;
    phoneNumberError: string | null;
}

const Contact:React.FC = () => {
    let inputProp = {
        firstname: "",
        lastname: "",
        phoneNumber: "",
        email: "",
        message: ""
    }
    const [input, setInput] = useState<Input>(inputProp)
    const [missingFields, setMissingFields] = useState<string[]>([])
    const [errorFormat, setErrorFormat] = useState<Iformat | null>(null)

     

    const handleInputChange = (fieldName: string, value) => {
        // const { name, value } = e.target;

          setInput(prevState => ({ ...prevState, [fieldName]: value }));

          // Remove the field from missingFields if it exists
    if (missingFields.includes(fieldName)) {
        setMissingFields(missingFields.filter(field => field !== fieldName));
      }
      if((fieldName === 'email' && value === "") || (fieldName === 'phoneNumber' && value === "")){
        setErrorFormat(null)
    }
        
      };

    const handleTextAreaChange = (fieldName, value) => {
        // console.log(e.target)
        // const { name, value } = e.target;
        setInput(prevState => ({ ...prevState, [fieldName]: value }));
        

        if (missingFields.includes(fieldName)) {
            setMissingFields(missingFields.filter(field => field !== fieldName));
          }
    }

      const handleSubmit = async (e: any) => {
        
        e.preventDefault();
        console.log(input)


            // beginning

            // axios configuration
            // axios.defaults.baseURL = import.meta.env.VITE_APP_API;

            //  const fetchData = async () => {
            //    try {
            //      setLoading(true);
            //      await axios.get("/all-property").then((response) => {
            //        if (response?.data?.data) {
            //          let dataArr = response?.data?.data;
            //          if (dataArr) {
            //            let cc = dataArr?.map((data) => {
            //              data.image = JSON.parse(data?.image);
            //              data.price = Number(data.price);
            //              data.description = JSON.parse(data?.description);
            //              return data;
            //            });

            //            setLand(cc);
            //            setLoading(false);
            //          }
            //        }
            //      });
            //    } catch (error) {
            //      setLoading(false);
            //      console.error("Error fetching data:", error);
            //    }
            //  };

            // end
        


            console.log(import.meta.env.VITE_API_URL)
        
        // try {
            //   const response = await axiosInstance.post('/v1/email/sendEmail', input);
            axiosInstance.post('/v1/email/sendEmail', input)
            .then(response => {

                console.log(response)
              //   if (response.data.message) {
                  if (response.data.successs) {
                  alert('Email sent');
                  setInput(prevState => ({ ...prevState, ...inputProp }));
                  setErrorFormat(null)
              //   } else {
              //     alert('Failed to send!');
              //   }
              // } catch (err) {
              //   console.error(err.data.missingFields);
              // //   if(err.response.data.missingFields){
              //     if(err.data.missingFields){
                  
              //       setMissingFields([...err.data.missingFields])
              //     }
              //     if(err.data.emailError || err.data.phoneNumberError ){
              //         setErrorFormat({...err.data})
              //     }
              // }
                  }
                  
                  if(response.data.missingFields){
                      setMissingFields([...response.data.missingFields])
                  }
                  if(response.data.emailError || response.data.phoneNumberError ){
                      setErrorFormat({...response.data})
                  }
            })
            .catch(err => {

                console.error(err)
            })
            
        // } catch (err) {
        // }

        //empty input tags on submission
    };

  return (
    <section className="contact-area" id="contact">
        <div className="title">
            <h2>Get in Touch with us</h2>
        </div>
        <div className="box">
            {/* <!----form----> */}
            <div className="contact form">
                <h3>send a message</h3>
                <form onSubmit={handleSubmit}>
                    <div className="formbox">
                        <div className="row50">
                            <div className="inputBox">
                                <span>First Name</span>
                                <input type="text" name='firstname' value={input.firstname} onChange={(e)=>handleInputChange('firstname', e.target.value)} />
                            </div>
                            <div className="inputBox">
                                <span>Last Name</span>
                                <input type="text" name='lastname' value={input.lastname} onChange={(e)=>handleInputChange('lastname', e.target.value)} />
                            </div>
                        </div>
                        <div className="row50">
                            <div className="inputBox">
                                <span>Email</span>
                                <input type="text" name='email' value={input.email} onChange={(e)=>handleInputChange('email', e.target.value)} />
                            </div>
                            <div className="inputBox">
                                <span>Number</span>
                                <input type="text" value={input.phoneNumber} name='phoneNumber' onChange={(e)=>handleInputChange('phoneNumber', e.target.value)} />
                            </div>
                        </div>
                        <div className="row100">
                            <div className="inputBox">
                                <span>Message</span>
                                <textarea placeholder="write Your Message here...." value={input.message} name='message' onChange={(e)=>handleTextAreaChange('message', e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="row100">
                            <div className="inputBox">
                                <input type="submit" value="send" />

                            </div>
                        </div>
                     {/* Map over missingFields and create <p> tag for each missing field */}
                        {missingFields.map((field, index) => (
                            field === 'phoneNumber' ? <p className= 'phoneNumber error' key={index}>mobile number is required</p> :
                            <p className={`${field} error`} key={index}>{`${field} is required`}</p>
                            
                        ))}
                    {/* Map over errorFormat and create <p> tag for each error field*/}
                        <p className='email error'>{errorFormat?.emailError}</p>
                        <p className='phoneNumber error'>{errorFormat?.phoneNumberError}</p>
                    </div>
                </form>
            </div>
            {/* <!--------info box--> */}
            <div className="contact info">
                <h3> Contact Info</h3>
                <div className="infoBox">
                    <div>
                        <div>
                            {/* <span><ion-icon name="location"></ion-icon></span> */}
                            <p>Pyramidenring 8A, 12681</p>
                        </div>


                        <div className="infoBox">
                            <span>
                                {/* <ion-icon name="call"></ion-icon> */}
                            </span>
                            <a href="Call outline">+49 1515 4756893</a>

                        </div>
                        <div className="infoBox">
                            <span>
                                {/* <ion-icon name="mail"></ion-icon> */}
                            </span>
                            <a href="Mail-outline">Sogiz@berlin.de</a>


                        </div>
                    </div>
                </div>

            </div>
            {/* <!-----map--> */}
            <div className="contact map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.9607857719006!2d13.527682976002067!3d52.534143672064786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84c06ac5ea8e3%3A0x199370b6a20f7797!2sPyramidenring%208a%2C%2012681%20Berlin!5e0!3m2!1sen!2sde!4v1709215702889!5m2!1sen!2sde"
                    width="600" height="450" style={{border: "0"}} allowFullScreen={false} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

            </div>
        </div>
    </section>
  )
}

export default Contact