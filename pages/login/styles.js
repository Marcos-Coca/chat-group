import css from 'styled-jsx/css'

export default css`
         .container{
        height:100vh;
        display:flex;
        align-items:center;
      }
        main {
          width: 70%;
          height:70vh;
          margin: auto;
          max-width:1260px;
          max-height:750px;
          text-align:center;
          color:var(--font-main-color);
          background: var(--main-color);
          border-radius:0.75rem;
        }

        h3{
          color:var(--font-second-color);
        }

        .container-login {
          width: 70%;
          margin: 2.5rem auto;
          display: grid;
          gap: 0.6rem;
          grid-template-areas:
            "email email"
            'google twitter'
            'facebook github';
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(3,50px);
        }
     

        @media(max-width:1000px){
          main{
            width:100%;
          }          
        }

        @media(max-width:650px){
          .container-login{
            width:100%;
            display:block;
          }
          button{
            max-width:300px;
            margin:10px auto;
          }
          main{
            height:auto;
          }
        }

`
