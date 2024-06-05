import React from 'react'
import Navbar from '../Navbar/Navbar'
export default function About() {
  return (
    <>
     <Navbar/>
    <body className='bodyabout'>
    <h1>
        لماذا تختارنا وبكل ثقة؟ 
    </h1>
    <p class="disc">يمتاز مكتبنا عن غيره من مكاتب المحاماة المعتمدة الأخرى في الأخلاقيات التي تسيّر آلية العمل داخل مكتبنا، بالإضافة إلى مبادئ المحامين والشركاء العاملين في المكتب والمؤمنين بأهمية تطوير الذات على المستوى العملي والقانوني سعيًا منهم لتحويل مكتبنا لشركة محاماة دولية في مصر. فقد شهد عملاؤنا بقوة مكتبنا وثقة التعامل معنا، والمبادئ التالية ما ستجدها عند التعامل معنا</p>
    <div class="parent">


        <div class="son1"><i class="fa-solid fa-gavel icon"></i>
        <p class="sos">نعمل دائما لارضاء العملاء</p>
        
        </div>
        <div class="son2"><i class="fa-solid fa-scale-balanced icon"></i>
        
            <p class="sos">حلول قانونية سريعة</p>       
        </div>
        <div class="son3"><i class="fas fa-user-shield icon"></i>
            <p class="sos">حفظ اسرارالعملاء</p>
        
        </div>
        <div class="son4"><i class="fa-regular fa-handshake icon"></i>
        
            <p class="sos">الثقة شعارنا</p>
        </div>



        
    </div>
    
</body>
    
    </>
  )
}
