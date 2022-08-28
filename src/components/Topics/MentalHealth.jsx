import React from "react";
import './Topic.css';


const MentalHealth = () => {
  return (
    <div>
        <img src="https://firebasestorage.googleapis.com/v0/b/jomdoc-b24b0.appspot.com/o/images%2Fmental_health2.jpg?alt=media&token=951e07ff-0412-4baf-8206-e2857341df1f" alt="" className="mainTopicPic"></img>
        <h1 className="bigTitle">Mental Health in Indonesia</h1>
        <br></br>
        <h2 className="overview-obj">Overview</h2>
        <p className="para-obj">
            According to a 2019 national health survey, 27.7 per cent, or more than one in four children,
            are classified as stunted. This rate rises sharply in remote areas, where health services may
            be less developed and where a higher proportion of the population may rely on subsistence farming. 
            In East Nusa Tenggara for example, 27 per cent of children live below the official poverty line
            of 9,793 rupiah, or about US$0.70 a day. There, the stunting rate was 43 per cent, or almost half
            of all children in the province, according to Dr Melania Gondomartojo, head of nutrition at the 
            World Food Programme in Indonesia. Realising its negative impact on the country’s economic growth,
            the Indonesian government has set a goal to reduce the stunting rate to 14 per cent by 2024. 
            In 2017, the National Strategy to Accelerate Stunting Prevention was formulated to bring together 
            22 different ministries, regional government, the private sector, and civil society groups to tackle stunting.
            The multi-pronged approach has seen positive development, bringing down the national stunting rate by almost 
            10 per cent from 36.8 per cent about a decade ago, in 2008. But challenges remain, especially at a time of global pandemic. 
        </p>
        <br></br>
        <br></br>
        <h2 className="overview-obj">Why ?</h2>
        <p className="para-obj">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra felis eu nulla egestas efficitur.
            Ut metus nunc, vehicula eu tristique sed, bibendum ut augue. Mauris vulputate molestie aliquam. Aenean dui
            ante, pretium ac ante in, consequat imperdiet magna. Aenean tincidunt velit velit. Suspendisse leo risus,
            sagittis vel malesuada ut, sollicitudin at mi. Integer faucibus diam vitae massa malesuada, eu tristique
            tellus lobortis. Donec vulputate pellentesque condimentum. Etiam interdum orci sit amet mi efficitur aliquet
            eu vel mi. Vivamus hendrerit elit at dui convallis mollis in eu arcu. Fusce scelerisque quam eget dignissim gravida.
            Duis ut placerat augue. Fusce luctus erat sed turpis ultrices, nec ornare quam auctor. In aliquet massa ut lacus vehicula
            accumsan.
        </p>
        <br></br>
        <br></br>
        <h2 className="overview-obj">Combatting this Issue</h2>
        <p className="para-obj">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra felis eu nulla egestas efficitur.
            Ut metus nunc, vehicula eu tristique sed, bibendum ut augue. Mauris vulputate molestie aliquam. Aenean dui
            ante, pretium ac ante in, consequat imperdiet magna. Aenean tincidunt velit velit. Suspendisse leo risus,
            sagittis vel malesuada ut, sollicitudin at mi. Integer faucibus diam vitae massa malesuada, eu tristique
            tellus lobortis. Donec vulputate pellentesque condimentum. Etiam interdum orci sit amet mi efficitur aliquet
            eu vel mi. Vivamus hendrerit elit at dui convallis mollis in eu arcu. Fusce scelerisque quam eget dignissim gravida.
            Duis ut placerat augue. Fusce luctus erat sed turpis ultrices, nec ornare quam auctor. In aliquet massa ut lacus vehicula
            accumsan.
        </p>
        <br></br>
        <h2 className="overview-obj">Make a difference together with Us! :</h2>
        <ul>
            <li className="list-btn-topic">
                <button className="topic-btn">Talk2Us</button>
            </li>
            <li className="list-btn-topic">
                <button className="topic-btn">Volunteer</button>
            </li> 
            
        </ul>
    </div>
  )
}

export default MentalHealth;