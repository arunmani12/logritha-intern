import React from 'react'
import classes from './footer.module.css'
import {useState} from 'react'
import Image  from 'next/image'


export default function Footer() {
  
    const [switch1, setSwitch1] = useState(false)
    const [switch2, setSwitch2] = useState(false)
    const [switch3, setSwitch3] = useState(false)


    const switchHandler1=()=>{
        setSwitch1(!switch1)
    }
    const switchHandler2=()=>{
        setSwitch2(!switch2)
    }
    const switchHandler3=()=>{
        setSwitch3(!switch3)
    }
    
    let div1= <div>
    <Image src='https://examsdaily.in/wp-content/uploads/2020/01/tnpsc1.jpg' alt='Image'/>
    <p>accusantium dolorum <span>official </span>beatae rerum similique optio saepe vel dicta <span>facere</span> modi,</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora in nihil, deleniti saepe optio corrupti dolorum perferendis hic iure, maiores quae vitae provident minus, ipsum, aut tempore facilis doloremque rem.</p>
    <p className='okok'>Its really helpfull for you ;) <span> Yours Tomorrow</span></p>
</div>
 let div2= <div>
 <Image src='https://athiyamanteam.com/wp-content/uploads/2019/01/image-8.png' alt='ass'/>
 <p>Ipsa veritatis inventore reprehenderit dolorem, officiis. Quaerat doloribus voluptatibus impedit repellat quae perspiciatis nesciunt, recusandae facilis unde fugit et eaque rem voluptatum perferendis libero veniam rerum aliquam eos minima voluptate</p>
</div>
 let div3= <div>
 <Image src='https://athiyamanteam.com/wp-content/uploads/2019/06/TNPSC-Group-4-Exam-Analysis-2014-and-2015-and-2018.jpg' alt='sd'/>
 <p>Quisquam, necessitatibus quo dolore sequi suscipit magni, voluptatum debitis, accusantium dolorum officia beatae rerum similique optio saepe vel dicta facere modi, voluptatem culpa expedita quaerat eum reprehenderit dolores. Assumenda, doloremque!</p>
</div>

    return (
        <React.Fragment>
        <h1 className={classes. hh}><span>Test </span>Syllabus</h1>
        <div className={classes.foot}>
           <h3 onClick={switchHandler1}>&#10003;Group 1</h3>
           {switch1 && div1}
           <h3 onClick={switchHandler2}>&#10003;Group 2</h3>
           {switch2 && div2 }
           <h3 onClick={switchHandler3}>&#10003;Group 3</h3>
           {switch3 && div3 }
        </div>
        </React.Fragment>
    )
}
