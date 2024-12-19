export function projectsSectionFunctionality(){
  const projects = [
    {
        image: 'project.gif',
        title: '',
        description: `“ 𝙹𝚊𝚍𝚒𝚕𝚊𝚑 𝚙𝚛𝚒𝚋𝚊𝚍𝚒 𝚢𝚊𝚗𝚐 𝚝𝚒𝚍𝚊𝚔 𝚋𝚎𝚛𝚛𝚐𝚊𝚗𝚝𝚞𝚗𝚐 𝚍𝚎𝚗𝚐𝚊𝚗 𝚜𝚒𝚊𝚙𝚊𝚙𝚞𝚗,, 𝚔𝚊𝚛𝚎𝚗𝚊 𝚔𝚊𝚖𝚞 𝚊𝚔𝚊𝚗 𝚖𝚎𝚛𝚊𝚜𝚊𝚔𝚊𝚗 𝚑𝚊𝚜𝚒𝚕 𝚢𝚊𝚗𝚐 𝚕𝚞𝚊𝚛 𝚋𝚒𝚊𝚜𝚊  ⍨⃝ㅤ ”`,
        role: '𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓',
        clientSatisfaction: '@𝑿𝒆𝒐𝒏'
    },
  ];

  let projectHTML = '';

  projects.forEach(project => {
    projectHTML+= `
      <div class="project-card">
          <div class="container title-and-description">
            <h2 class="project-title">${project.title}</h2>
            <p class="project-description semi-transparent-word">
              ${project.description}
            </p>
            <button class="call-to-action-btn">ᴠɪsɪᴛ sɪᴛᴇ</button>
          </div>
          <div class="fade-bgColor">ɪɴғᴏʀᴍᴀᴛɪᴏɴ :</div>
          <div class="container image-and-result">   
            <img class="project-image" src="images and icons/icons/${project.image}" alt="proj-img" />
            <div class="project-result d-flex">
              <div>
                <p class="role semi-transparent-word">ʀᴏʟᴇ</p>
                <p class="result">${project.role}</p>
              </div>  
              <div>
                <p class="satisfaction semi-transparent-word">
                  ᴄʟɪᴇɴᴛ sᴀᴛɪsғᴀᴄᴛɪᴏɴ
                </p>
                <p class="result">${project.clientSatisfaction}</p>
              </div>
            </div>
          </div>
        </div>
    `
  });
  
  document.querySelector('.projects-container').innerHTML = projectHTML


}
