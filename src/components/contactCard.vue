<template>


      <div class="col" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div class="front">
            <div class="inner">
               <p><strong>&lt;./Devslab</strong></p>
              <h4>{{name}}</h4>
              <h4>{{job}}</h4>
            </div>
          </div>
          <div class="back">
            <div class="inner" id="back">
              <div class="icon">
                <IconoDevsLab/>
              </div>
              <div class="phone-icon">
                 <svg
                style="width:24px;height:24px;color#F2547D"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#F2547D"
                  d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                /></svg>
              </div>
              <div class="email-icon">
                <svg style="width:24px;height:24px;" viewBox="0 0 24 24">
    <path fill="#F2547D" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
</svg>
              </div>
              <div class="url-icon">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#F2547D" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
</svg>
              </div>
              <div class="phone">
                <p>{{phone}}</p>
              </div>
              <div class="email">
                <p>{{mail}}</p>
              </div>
              <div class="url">
                <p>www.devslab.com.mx</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

</template>

<script>
import IconoDevsLab from './iconoDevslab.vue'
export default {
    props:{
        name: String,
        job: String,
        phone: Number,
        mail: String

    },
    components:{
      IconoDevsLab
    }
};
</script>

<style scoped lang="css">
svg{
  margin:0px auto;
}
.icon{
  grid-column: 1;
  grid-row: 1 / 3;
}
.phone-icon{
  grid-column: 2;
  grid-row: 1;
  

}
.email-icon{
  grid-column: 2;
  grid-row: 2;
}
.url-icon{
  grid-column: 2;
  grid-row: 3;
}
.email{
  grid-column: 3;
  grid-row: 2;
}
.phone{
  grid-column: 3;
  grid-row: 1;
}
.icon img{
  margin-top: 50%;
}
.url{
  grid-column: 3;
  grid-row: 3;
}
.phone p{
  text-align: left;
}
.email p{
  text-align: left;
}
.url p{
  text-align: left;
}
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#back{
  background: #fff;
  width: auto;
  height: auto;
  color: #000;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 10fr);
}
h1 {
  font-size: 2rem;
  font-family: "Montserrat";
  font-weight: normal;
  color: #fff;
  text-align: center;
  margin: 2rem 0;
}

.wrapper {
  width: 90%;
  margin: 0 auto;
  max-width: 80rem;
}

.cols {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.col {
  width: calc(35% - 2rem);
  margin: 1rem;
  cursor: pointer;
}

.container {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
 
  
}

.front,
.back {
  background-size: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-position: center;
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  min-height: 280px;
  height: auto;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
}

.back {
  background: #cedce7;
  background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
}

.front:after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  content: "";
  display: block;
  opacity: 0.6;
  background-color: #000;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}
.container:hover .front,
.container:hover .back {
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.inner {
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;
}

.container .back {
  background: linear-gradient(118deg, rgba(0,124,236,1) 0%, rgba(10,22,101,1) 49%, rgba(97,9,121,1) 100%);
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container .front {
  background: linear-gradient(118deg, rgba(0,124,236,1) 0%, rgba(10,22,101,1) 49%, rgba(97,9,121,1) 100%);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container:hover .back {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container:hover .front {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.front .inner p {
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.front .inner p:after {
  content: "";
  width: 4rem;
  height: 2px;
  position: absolute;
  background: #fff;
  display: block;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -0.75rem;
}

.front .inner span {
  color: rgba(255, 255, 255, 0.7);
  font-family: "Montserrat";
  font-weight: 300;
}
</style>