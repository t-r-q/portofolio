import React from 'react'

export default function Experience() {
  return (
    
  <div>
    <div>
      <h3 className="text-3xl py-1 dark:text-white ">Professional Experience</h3>

      </div>
    <div className="lg:flex gap-10">
      <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
        
        <h3 className="text-lg font-medium pt-8 pb-2  py-4 text-sky-800">
        .Net Developer
        </h3>  <p className="py-1">Lexicon. 2023 Sep - present | Malmö</p>               
        <h4 className=" text-sky-900">Developed solutions for Microsoft Azure using C# and .NET Framework. Worked with a team of developers to design, develop, and test software applications, implementing agile development methodologies.</h4>
       
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">                   
        <h3 className="text-lg font-medium pt-8 pb-2 text-sky-800">
        System Developer                     
        </h3><p className="py-1">
        Tillväxrverket. 2018 Apr – 2018 Oct | Östersund, 
          </p>  
        <h4 className="py-4  text-sky-900">                         
            Design, develop, and maintain software applications that interact with external APIs
           Use the C# language and .NET framework to develop and implement user interfaces for displaying data
        Write clean, efficient, and well-documented code
            
        </h4>
      </div>

      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">                  
        <h3 className="text-lg font-medium pt-8 pb-2 ">IT Support</h3>
        <p className="py-1">
        HIBA, University of Business Administration Damascus. 2012 Mar – 2013 Sep | Damascus
        </p>
        <h4 className="py-4  text-sky-900">Provide technical support to students, including troubleshooting and resolving hardware, software, and network issues
                                           Install, configure, and maintain computer systems, software, and peripherals. Monitor and maintain the university’s IT infrastructure, including servers, networks, and security systems</h4>

      </div>   
    </div>
    </div>

  )
}
