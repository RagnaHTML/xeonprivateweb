export function RenderContent(){


  // ----------------RENDERING HOME SECTION-------------------//
  const homeDetails = {
    greetTxt: `ʜᴇʟʟᴏ ᴠɪsɪᴛᴏʀ, ɪ'ᴍ`,
    name: '۞`𝑋𝑒𝑜𝑛',
    profilePhoto: 'profile.jpg',
    myPhoto: 'xprofile.jpg',
    welcomeTxt: '𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐦𝐲 𝐰𝐞𝐛𝐬𝐢𝐭𝐞 ✪',
    whatsappLink: 'https//wa.me/6285222024740?text=𝒉𝒂𝒍𝒐,+𝒐𝒘𝒏𝒆𝒓+𝒂𝒙𝒆𝒍+☕',
    tiktokLink: 'https://www.tiktok.com/@x.ragna_?_t=8sLLsCNy3rM&_r=1',
    instagramLink: 'https://instagram.com/xr.irull'
  }

  const homeHTML = `
    <div class="profile-detail">
      <p>${homeDetails.greetTxt}</p>
      <h1 class="my-name gradient-word">${homeDetails.name}</h1>
      <h2 class="display-skills gradient-word"></h2>
      <p>${homeDetails.welcomeTxt}</p>
      <div class="my-social-media-accounts">
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.tiktokLink}">
          <img src="images and icons/icons/xtiktok.jpg" alt="tiktok icon" />
        </a>
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.ytLink}">
          <img src="images and icons/icons/xwhatsapp.jpg" alt="whatsapp icon" />
        </a>
        <a class="social-media" target="_blank" href="${homeDetails.instagramLink}">
          <img src="images and icons/icons/xinstagram.jpg" alt="insta icon" />
        </a>
      </div>
    </div>

    <div class="profile-pic">
      <div id="first-layer">
        <img
          id="profile-img"
          src="images and icons/images/${homeDetails.profilePhoto}"
          alt="profile img" />
      </div>
    </div>
  `;
  
  const homeSection = document.querySelector('#home-section').innerHTML = homeHTML;
    




   // ----------------RENDERING ABOUT SECTION-------------------//
   const aboutDetails = {
    myPhoto: 'xprofile.jpg',
    aboutMeFirstPrgrph: `𝐻𝑎𝑖. 𝑆𝑎𝑦𝑎 𝑿𝒆𝒐𝒏 ⌨︎, 𝑠𝑒𝑜𝑟𝑎𝑛𝑔 𝑃𝑒𝑙𝑎𝑗𝑎𝑟 𝑑𝑎𝑛 𝑃𝑟𝑜𝑔𝑟𝑎𝑚𝑚𝑒𝑟 𝑦𝑎𝑛𝑔 𝑠𝑢𝑘𝑎 𝑏𝑒𝑟𝑏𝑎𝑔𝑖 𝑘𝑎𝑟𝑦𝑎 𝑘𝑟𝑒𝑎𝑡𝑖𝑓 𝑑𝑎𝑛 𝑖𝑛𝑠𝑝𝑖𝑟𝑎𝑡𝑖𝑓. 𝑆𝑎𝑦𝑎 𝑚𝑒𝑚𝑏𝑢𝑎𝑡 𝑘𝑜𝑛𝑡𝑒𝑛 𝑦𝑎𝑛𝑔 𝑚𝑒𝑛𝑎𝑚𝑝𝑖𝑙𝑘𝑎𝑛 ℎ𝑎𝑠𝑖𝑙 𝑝𝑒𝑚𝑟𝑜𝑔𝑟𝑎𝑚𝑎𝑛 𝑠𝑎𝑦𝑎 𝑦𝑎𝑛𝑔 𝑙𝑢𝑐𝑢, 𝑚𝑒𝑛𝑔𝑢𝑏𝑎ℎ 𝑘𝑜𝑑𝑒 𝑦𝑎𝑛𝑔 𝑟𝑢𝑚𝑖𝑡 𝑚𝑒𝑛𝑗𝑎𝑑𝑖 𝑘𝑜𝑛𝑡𝑒𝑛 𝑦𝑎𝑛𝑔 𝑚𝑒𝑛𝑎𝑟𝑖𝑘 𝑠𝑒𝑐𝑎𝑟𝑎 𝑣𝑖𝑠𝑢𝑎𝑙 𝑑𝑎𝑛 𝑚𝑒𝑛𝑦𝑒𝑛𝑎𝑛𝑔𝑘𝑎𝑛.`,
    aboutMeSecondPrgrph: `𝑆𝑎𝑦𝑎 𝑗𝑢𝑔𝑎 𝑡𝑒𝑙𝑎ℎ 𝑚𝑒𝑛𝑐𝑖𝑝𝑡𝑎𝑘𝑎𝑛 𝑎𝑖 𝑦𝑎𝑛𝑔 𝑏𝑒𝑟𝑛𝑎𝑚𝑎 𝐴𝑥𝑒𝑙. 𝐾𝑒𝑝𝑟𝑖𝑏𝑎𝑑𝑖𝑎𝑛𝑛𝑦𝑎 𝑐𝑢𝑘𝑢𝑝 𝑢𝑛𝑖𝑘, 𝑑𝑖𝑎 𝑗𝑢𝑔𝑎 𝑏𝑖𝑠𝑎 𝑚𝑒𝑛𝑔𝑔𝑢𝑛𝑎𝑘𝑎𝑛 𝑣𝑜𝑖𝑐𝑒, 𝑚𝑒𝑛𝑑𝑜𝑤𝑛𝑙𝑜𝑎𝑑 𝑣𝑖𝑑𝑒𝑜, 𝑏𝑒𝑟𝑖𝑛𝑡𝑒𝑟𝑎𝑘𝑠𝑖 𝑏𝑒𝑏𝑎𝑠,ㅤ 𝐷𝐿𝐿. 𝐽𝑖𝑘𝑎 𝑎𝑛𝑑𝑎 𝑏𝑒𝑟𝑚𝑖𝑛𝑎𝑡 𝑢𝑛𝑡𝑢𝑘 𝑚𝑒𝑛𝑔𝑜𝑏𝑟𝑜𝑙 𝑙𝑎𝑛𝑔𝑠𝑢𝑛𝑔 𝑑𝑒𝑛𝑔𝑎𝑛 𝑎𝑖.`, 
    aboutMeMiliPrgrph:`𝐋𝐈𝐍𝐊 𝐁𝐎𝐓 𝐒𝐀𝐘𝐀 𝐓𝐀𝐑𝐔𝐇 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇 𝐁𝐄𝐑𝐋𝐎𝐆𝐎 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏.`
   }

   const aboutHTML = `
    <h2 class="section-name about">ᴀʙᴏᴜᴛ ᴍᴇ <span class="line"></span></h2>
    <div class="container">
      <div>
        <img
          class="profile-pic"
          src="images and icons/images/${aboutDetails.myPhoto}"
          alt="profile img" />
      </div>
      <div class="about-self scroll-reveal">
        <p class="first-paragraph">
          <span>${aboutDetails.aboutMeFirstPrgrph}</span>
        </p>
        <br />
        <p class="second-paragraph">
          <span>${aboutDetails.aboutMeSecondPrgrph}</span>
        </p>
        <br />
        <p class="second-paragraph">
          <span>${aboutDetails.aboutMeMiliPrgrph}</span>
        </p>
      </div>
    </div>
   `

  const aboutSection = document.querySelector('#about-section').innerHTML = aboutHTML;




    // ----------------RENDERING SKILLS SECTION-------------------//

    const skills = [
      { iconName: "guitarist.png", skillName: "𝐆𝐮𝐢𝐭𝐚𝐫𝐢𝐬𝐭" },
      { iconName: "music.png", skillName: "𝐌𝐮𝐬𝐢𝐜 𝐖𝐫𝐢𝐭𝐞𝐫" },
      { iconName: "music transcription.png", skillName: "𝐌𝐮𝐬𝐢𝐜 𝐓𝐫𝐚𝐧𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧" },
      { iconName: "html.png", skillName: "𝐇𝐓𝐌𝐋" },
      { iconName: "CSS.png", skillName: "𝐂𝐒𝐒" },
      { iconName: "java-script.png", skillName: "𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭" },
      { iconName: "Git.png", skillName: "𝐆𝐢𝐭" },
      { iconName: "github (2).png", skillName: "𝐆𝐢𝐭𝐇𝐮𝐛" },
      { iconName: "visual-studio.png", skillName: "𝐕𝐒𝐜𝐨𝐝𝐞" },
    ];

    const skillHTML = `
        <h2 class="section-name"><span class="line"></span>sᴋɪʟʟs ㋡</h2>
          
          <div class="skills-container d-flex">
          </div>
    `

  const skillSection = document.querySelector('#skills-section').innerHTML = skillHTML;
  
  let skillCard = ''
  skills.forEach(skill => {
   skillCard += `<div class="skill">
    <img src="images and icons/icons/${skill.iconName}" alt="" class="skill-icon">
    <p class="skill-name">${skill.skillName}</p>
  </div>`
  });
  const skillsContainer = document.querySelector('.skills-container').innerHTML = skillCard;




  // ----------------RENDERING CONTACT SECTION-------------------//
  const contactDetails = {
    heading: 'ᴄᴏɴɴᴇᴄᴛ ᴡɪᴛʜ ᴍᴇ',
    subheading: '𝐬𝐭𝐚𝐲 𝐜𝐚𝐥𝐦 𝐢𝐧 𝐚𝐧𝐲 𝐬𝐢𝐭𝐮𝐚𝐭𝐢𝐨𝐧 !',
  }
  const contactHTML = `
    <h2 class="section-name">${contactDetails.heading}</h2>
    <p class="subheading">${contactDetails.subheading}</p>
    <form class="f-flex">
      <div class="input-container">
        <input class="input name" type="text" placeholder="ɴᴀᴍᴇ" required />
        <input class="input email" type="email" placeholder="ᴇᴍᴀɪʟ" required/>
      </div>

      <div class="txt-area-btn-container">
        <textarea name="message me" class="input" placeholder="enter to message"></textarea> 
        <button id="submit-btn">sᴜʙᴍɪᴛ</button>
      </div>
    
    </form>
  `;

  const contactSection = document.querySelector('#contact-section').innerHTML = contactHTML;
}
