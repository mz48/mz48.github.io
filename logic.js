async function init () {
    const node = document.querySelector("#type-text")
    
     const node1 = document.querySelector("#type-text")
    
    
    await sleep(1000)
    node1.innerText = ""
    //await node1.type("I'm passionate about ")
    
  
    while (true) {
      await node.type('front-end development')
      await sleep(2000)
      await node.delete('front-end development')
      await node.type('UI/UX design')
      await sleep(2000)
      await node.delete('UI/UX design')
      await sleep(2000)
       await node.type('electrical engineering')
      await sleep(2000)
      await node.delete('electrical engineering')
      await sleep(2000)
       await node.type('animation')
      await sleep(2000)
      await node.delete('animation')
      await sleep(2000)
       await node.type('cognitive sciences')
      await sleep(2000)
      await node.delete('cognitive  sciences')
      await sleep(2000)
    }
  }
  
  
  // Source code 🚩
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.innerText += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.innerText = this.innerText.slice(0, this.innerText.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  
  init()
  
 
  
  
  window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
      
  
  };
  

