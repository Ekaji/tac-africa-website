/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { ConditionalLinks } from '../components/conditionalLinks';
import axios from 'axios';

const initialValue = {
  email: '',
  first_name: '',
  last_name: '',
  subscribed: null,
  phone: '',
};

const FormModal = ({ PDF, modalShow, setModalShow }) => {
  const [values, setValues] = useState(initialValue);
  const [checkBoxState, setCheckBoxState] = useState(false);

  

  const handleInputChange = (propertyName) => (e) => {
    e.preventDefault();

    if (propertyName == "subscribed") {
      setValues({
        ...values,
        [propertyName]: checkBoxState ? 1 : 0,
      });

      setCheckBoxState(!checkBoxState);
    }
    setValues({
      ...values,
      [propertyName]: e.target.value,
    });
  };

  console.log(checkBoxState)

  const formDataChecker = () => {
    if (
      values.email &&
      values.first_name &&
      values.last_name &&
      values.phone
    ) {
      return true;
    }
    return false;
  };

  let response;

  const handleSubmit = async () => {
    if (formDataChecker()) {
      try {
        response = await axios.post(
          'https://survey.tacafrica.org/api/visitors',
          values
        );
        // console.log(response.status)
      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log(formDataChecker());

  return (
    <div className="">
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className={` ${modalShow ? '' : 'hidden'} 
         overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  z-50 w-full  md:inset-0 h-modal md:h-full justify-center items-center bg-overlay
        `}
      >
        <div className="relative lg:translate-x-1/2 lg:translate-y-1/4 p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                enter your details to download
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={() => setModalShow(!modalShow)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="mx-4 pb-4">
              {/* <form> */}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  value={values.email}
                  onChange={handleInputChange('email')}
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                    value={values.first_name}
                    onChange={handleInputChange('first_name')}
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                    value={values.last_name}
                    onChange={handleInputChange('last_name')}
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                    value={values.phone}
                    onChange={handleInputChange('phone')}
                  />
                  <label
                    htmlFor="phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number (123-456-7890)
                  </label>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="checkbox-2"
                  onChange={handleInputChange('subscribed')}
                  type="checkbox"
                  value={values.subscribed}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checkbox-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  would you like to subscribe to our newsletter?
                </label>
              </div>

              <ConditionalLinks
                condition={formDataChecker()}
                wrapper={(children) => (
                  <a
                    href={PDF}
                    download //adds the download attribute when user data has been filled correctly
                  >
                    <>{children}</>
                  </a>
                )}
              >
                <button
                  // type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </ConditionalLinks>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
