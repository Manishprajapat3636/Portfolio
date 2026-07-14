import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";


const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    z-index:1;
    position:relative;
`;
const Wrapper = styled.div`
    display:flex;
    position:relative;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    width:100%;
    max-width:1100px;
    gap:12px;
    @media(max-width:960px){
        flex-direction:column;
    }
`;
const Title = styled.div`
    text-align:center;
    font-size:52px;
    font-weight:600;
    margin-top:20px;
    color:${({ theme }) => theme.text_primary};
    @media(max-width:768px){
        margin-top:12px;
        font-size:32px;
    }
`;
const Desc = styled.div`
    text-align:center;
    font-size:18px;
    font-weight:600;
    color:${({ theme }) => theme.text_secondary};
    @media (max-width:768px){
    font-size:16px;
    }
    `;
const ContactForm = styled.form`
        width: 95%;
        display: flex;
        flex-direction: column;
        background-color: rgba(17, 25, 40, 0.83);
        border: 1px solid rgba(255, 255, 255, 0.125);
        padding: 32px;
        border-radius: 12px;
        box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
        margin-top: 28px;
        gap: 12px;
        max-width: 600px;
    `;
const ContactTitle = styled.div`
        margin-bottom: 6px;
        color: ${({ theme }) => theme.text_primary};
        font-size: 28px;
        font-weight: 600;
    `;
const ContactInput = styled.input`
        flex: 1;
        border: 1px solid ${({ theme }) => theme.text_secondary + 50};
        outline: none;
        font-size: 18px;
        color: ${({ theme }) => theme.text_primary};
        border-radius: 12px;
        padding: 12px 16px;
        &:focus {
            border: 1px solid ${({ theme }) => theme.primary};
        }
        background-color: transparent;
    `;
const ContactInputMessage = styled.textarea`
        flex: 1;
        border: 1px solid ${({ theme }) => theme.text_secondary + 50};
        outline: none;
        font-size: 18px;
        color: ${({ theme }) => theme.text_primary};
        border-radius: 12px;
        padding: 12px 16px;
        &:focus {
            border: 1px solid ${({ theme }) => theme.primary};
        }
        background-color: transparent;
    `;
const ContactButton = styled.input`
        width: 100%;
        text-align: center;
        background: hsla(271, 100%, 50%, 1);
        padding: 13px 16px;
        margin-top: 2px;
        border-radius: 12px;
        border: none;
        color: ${({ theme }) => theme.text_primary};
        font-size: 18px;
        font-weight: 600;
        text-decoration: none;
    `;


const Contact = () => {
    const form = useRef();
    const handelSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_d0akgyq",
                "template_wsnbl99",
                form.current,
                "Jn7sOYPoO2ycL6VPZ"
            )
            .then(
                (result) => {
                    alert("Message Sent");
                    form.current.reset();
                },
                (error) => {
                    alert(error.text);
                    console.log(error);
                }
            );
    };
    return (
        <Container id="Contact">
            <Wrapper>

                <Title>Contact</Title>
                <Desc style={{ marginBottom: "40px" }}>
                    Feel Free to reach out to me for any question or opportunity...
                </Desc>
                <ContactForm ref={form} onSubmit={handelSubmit}>
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <ContactInput placeholder="Your Email" name="from_email" required />
                    <ContactInput placeholder="Your Name" name="from_name" required />
                    <ContactInput placeholder="Subject" name="subject"  required />
                    <ContactInputMessage placeholder="Message" name="message" rows={4}  required />
                    <ContactButton type="submit" value="Send" />
                </ContactForm>
            </Wrapper>
        </Container>
    )
}

export default Contact;