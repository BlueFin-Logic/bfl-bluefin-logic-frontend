import axios from "axios";

const sendEmail = async (payload) => {
  let {name, email, subject, message} = payload
  let cusName = "nhannguyen@bluefinlogic.com"
  let cusMessage = `
  Customer: ${name}
  Email: ${email}
  
  Subject: ${subject}
  
  Message: ${message}`
  let url = `https://us-central1-bluefinlogic-312115.cloudfunctions.net/SendEmail?cusEmail=${cusName}&cusMessage=${cusMessage}`

  return await axios.get(url)
}

export default sendEmail