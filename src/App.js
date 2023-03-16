import logo from './logo.svg';
import './App.css';

function App() {

  const  about_me =  [
    {
      id: "first-p-about",
      content:
        " I graduated from Richfield Graduate Institute of Technology with BSc and Notional Diploma and also graduated from CTU training solution with certificate in System Development. I have a great skill which I can come into your company and make a fast and immediate impact. I am a strong communicator, I work very well both on my own and as part of the team, I will always provide excellent customer service and I will always perform to a high standard whilst under pressure."
    },
    {
      id: "second-p-about",
      content:
        "I am a positive, forward-thinking person and genuinely believe I can come into the team and help push the company forward towards achieving its goals. If you hire me, you will quickly see a positive return on investment. I have experience of working with other people, I am someone who is always seeking to learn and develop and i have creativity to help your business grow whilst offering excellent service to your customer. Outside of the work I keep myself fit and active. I am positive person who always embraces changes."
    },
    {
      id: "third-p-about",
      content:
        "It all started back in high school, where I would spend most of my time I felt <brin love with IT information Technology as I started being curious about how these software work since everything happen with a click of button. I then decided to study Information Technology after my high school, in other curiosity got me into this field. I love to see people using my product or a software that I developed. Now that I am a developer I love the challenge that I come across in this field, this field allows me to grow and move with times as technology keeps changing. And the other reason why I studied Information Technology is that this day’s technology makes life easier and I am happy that I part of it."
    }
  ]

  const skills = [
    { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
    { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
    {
      id: "JavaScript_skill",
      content: "JavaScript",
      porcentage: "90%",
      value: "90"
    },
    { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
    {
      id: "ReactJS_skill",
      content: "ReactJS",
      porcentage: "80%",
      value: "80"
    },
    {
      id: "Python_skill",
      content: "Python",
      porcentage: "75%",
      value: "75"
    },
    {
      id: "C#_skill",
      content: "C#",
      porcentage: "85%",
      value: "85"
    },
    {
      id: "Java_skill",
      content: "Java",
      porcentage: "80%",
      value: "80"
    }
  ]
  return (
    <div className="App">
      <nav>
      <table class=" navigation-table">
        <tr class="navigation">
            <th>LOGO</th>
            <th class="navigation-links">
                <a href="index2.html">Home</a>
                <a href="AboutMe.html">About me</a>
                <a href="ContactUs.html">Contact Us</a>
            </th>
        </tr>
    </table>
      </nav>

   <div className='banner'>
         <div className='names'>
              <h2>Hello, i am Thabiso Jack</h2>
                <h1>Software developer</h1>
         </div>
   </div>


   <div className='about-me-section'>
     <div className='inner-container'>
         <div className='main'>
     

             {
              skills.map((res)=>(
                <>
                  <div className='skiil-container'>
                    <div className='heading-labels'>
                      <p>{res.content}</p>
                      <p>{res.porcentage}</p>
                    </div>
                    <div className='out'>
                      <div style={{ width: `${res.value}%` }} className='in'>

                      </div>
                    </div>

                  </div>
                </>
              ))
             }

            
         </div>
         <div>
          <h1>About Me</h1>
          <div className='line'></div>

            <div>
              {
                about_me.map((res)=>(
                  <>

                <div>
                    <p>{res.content}</p>
                </div>

                  </>
                ))
              }
              
            </div>
         </div>


     </div>
   </div>

    <div className='contact-me'>
        <h1 style={{textAlign:'center'}}>Contact Me</h1>
        
        <div className='details-container'>
             <div>
               <h1>Send A Message</h1>
               <div className='underLine'></div>

              <div className='form'>
                  <input type='text' placeholder='your name'></input><br/>
                  <input type='text' placeholder='your email'></input><br/>
                  <input type='text' placeholder='subject '></input><br/>
                  <textarea type='text' rows="10"></textarea><br/>
                  <button>SUBMIT</button>
              </div>
             </div>
             <div>
             <h1>Get In Touch</h1>
             <div className='underLine'></div>
             <div>
                 <p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                   Simply fill the from and send me an email.</p>
             </div>
             </div>
        </div>
    </div>

    </div>
  );
}

export default App;
