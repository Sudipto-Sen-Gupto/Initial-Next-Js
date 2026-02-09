import React from 'react';

const page = async({params}) => {

    // const {technology,topic,page_no,subject}=await params
        
        const {slug}=await params;
        const [technology,topic, ,page_no,subject]=slug || [];
        console.log(slug);
    return (
        <div>
            <h1 className='bg-gradient-to-r from-sky-200 via-sky-300 via-sky-400 to-sky-500 text-black text-3xl text-center p-4 rounded-lg shadow-lg'>Here is your tutorial</h1>

            <div className='flex justify-between mt-10'>
                <h2>{technology}_{topic}</h2>
                <h2>{page_no}_{subject}</h2>
            </div>
        </div>
    );
};

export default page;