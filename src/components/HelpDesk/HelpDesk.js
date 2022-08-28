import React, { useEffect, useState } from 'react';
import './HelpDesk.css';
import db from './../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const HelpDesk = () =>{
    const [faqs, setFaqs] = useState([]);
    const faqsCollectionRef = collection(db, "faqs");
    
    useEffect(() =>{
        const getFaqs = async () => {
            const data = await getDocs(faqsCollectionRef);
            setFaqs(data.docs.map((doc) =>({ ...doc.data(), id: doc.id})));
        }

        getFaqs();
    }, []);

    return(
        <>
        <div className='helpDeskPage'>
            <div className='helpDeskPageContent'>
                <h1>Help Desk</h1>
                <br></br>
                <br></br>
                <h2>FAQ (Frequently Asked Questions)</h2>
                <br></br>
                {faqs.map((faq) => {
                    return(
                        <>
                        <div className='helpDeskFaqItem'>
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                            <br></br>
                        </div>
                        </>
                    );
                })};
            </div>
        </div>
        </>

)
}


export default HelpDesk;