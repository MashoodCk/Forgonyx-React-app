import '../styles/Enquire.css'

import { FaArrowRight } from "react-icons/fa";

function Enquire() {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "a895e83d-cdad-4360-b9ea-1ce6aca43004");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            if (!res.ok) {
                throw new Error(`Failed to fetch: ${res.statusText}`);
            }

            const data = await res.json();
            if (data.success) {
                console.log("Success", data);
        
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };


    return (
        <div className="contact-container enquire">

            <form onSubmit={onSubmit} className='contact-right'>
                <div className="contact-title">
                    <h2>Enquire Now</h2>
                </div>
                <input type="text" name="name" placeholder='Your Name' className='contact-inputs' required />
                <input type="email" name="email" placeholder='Your Email' className='contact-inputs' required />
                <textarea name="message" placeholder='Your message...' className='contact-inputs' required></textarea>
                <button type='submit' >Send <FaArrowRight /></button>
            </form>

        </div>
    )
}

export default Enquire
