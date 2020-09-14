import React from 'react';

const SectionTitle = (props) => {

    const { navSelected } = props;
    
    const title = navSelected.charAt(0).toUpperCase() + navSelected.slice(1);
    
    const elements = [
        <div className="row justify-content-center">
            <div className="col-6 pt-2 text-center">
                <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing flicker-1">                
                {title}
                </h2>
            </div>
        </div>,
        <div className="row justify-content-center">
            <div className="col-6 pt-2 text-center">
                <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing flicker-2">                
                {title}
                </h2>
            </div>
        </div>,
    <div className="row justify-content-center">
        <div className="col-6 pt-2 text-center">
            <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing flicker-3">                
            {title}
            </h2>
        </div>
    </div>,
    <div className="row justify-content-center">
        <div className="col-6 pt-2 text-center">
            <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing flicker-4">                
                {title}
            </h2>
        </div>
    </div>,
    <div className="row justify-content-center">
        <div className="col-6 pt-2 text-center">
            <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing">                
            {title}
            </h2>
        </div>
    </div>,
    <div className="row justify-content-center">
        <div className="col-6 pt-2 text-center">
            <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing">                
            {title}
            </h2>
        </div>
    </div>,
    <div className="row justify-content-center">
        <div className="col-6 pt-2 text-center">
            <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing">                
            {title}
            </h2>
        </div>
    </div>,
    <div className="row justify-content-center">
        <div className="col-6 pt-2 text-center">
            <h2 id={title} className="p-5 mt-4 mb-6 section-title glowing flicker-1">                
            {title}
            </h2>
        </div>
    </div>,
    ];

    const randomStyledTitle = elements[Math.floor(Math.random() * 8)];
    console.log(randomStyledTitle);
    
    return (
        randomStyledTitle
    )
}

export default SectionTitle;