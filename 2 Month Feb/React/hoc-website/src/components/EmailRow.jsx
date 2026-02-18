 
 
function EmailRow() {

  return (

    <>
      <div className="email-row d-flex align-items-center border-bottom read">
    <Form.Check type="checkbox" className="email-checkbox p-2" />
    <button variant="link" className="star-btn p-0 btn p-2">
    ☆
    </button>

    <span className="sender p-2">Google Security</span>
    <span className="subject flex-grow-1 p-2">
    Security Alert: New sign-in detected{" "}
    <span className="snippet">
        - We noticed a new login to your account on Windows.
    </span>
    </span>
    <span className="time p-2">9:42 AM</span>
</div>
   
    </>

  );
  
}

export default EmailRow;



// 1. How to use reusable components
// 2. syntax 
// 3. what is SRC folder
// 4. How to create Pages
// 5. Starting file App.js - home page
// 6. function - components
// 7. code is only on SEC folder
// 8. screens - how to create pages
// 9. export default


// write code 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
