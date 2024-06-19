import React, { useState } from 'react';
import './contact.css'; 

const Contact = () => {
    const [submissionMessage, setSubmissionMessage] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget; 
        setSubmissionMessage(""); 
        const formData = new FormData(form);
        formData.append("access_key", "39a05516-a261-4c08-ae8e-a90a68381bd5");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await response.json();

            if (result.success) {
                setSubmissionMessage("Successfully sent!");
                form.reset();
            } else {
                setSubmissionMessage("Failed to send. Please try again.");
            }
        } catch (error) {
            setSubmissionMessage("An error occurred. Please try again.");
            console.error("There was an error submitting the form", error);
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Learn more about me and what I do.</p>
            <form className="contact-form" onSubmit={onSubmit}>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    required
                ></textarea>
                <button type="submit">Send</button>
                {submissionMessage && (
                    <div className="submission-message">{submissionMessage}</div>
                )}
            </form>
        </div>
    );
};

export default Contact;
