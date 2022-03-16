import React from 'react';
import "./SfdcCategory.scss";
import getCreative from '../../../../assets/get_creative.png'
import grid1 from "../../../../assets/grid/grid-1.png"
import grid2 from "../../../../assets/grid/grid-2.png"
import grid3 from "../../../../assets/grid/grid-3.png"
import grid4 from "../../../../assets/grid/grid-4.png"
import grid5 from "../../../../assets/grid/grid-5.png"
import grid6 from "../../../../assets/grid/grid-6.png"

const SfdcCategory = () => {
    return (
        <section className="sfdc-category">
            <img src={getCreative} alt="get-creative"/>
            <div className="sfdc-category-list">
                <div className='sfdc-category-card'>
                    <img src={grid1} alt="grid"/>
                    <div className='card-details'>
                        <ul>
                            <li>- Paragraph</li>
                            <li>- Essay</li>
                            <li>- Poem</li>
                            <li>- Story</li>
                            <li>- Letter</li>
                        </ul>
                    </div>
                </div>
                <div className='sfdc-category-card'>
                    <img src={grid2} alt="grid"/>
                    <div className='card-details'>
                        <ul>
                            <li>- Audio speech</li>
                            <li>- Video speech</li>
                        </ul>
                    </div>
                </div>
                <div className='sfdc-category-card'>
                    <img src={grid3} alt="grid"/>
                    <div className='card-details'>
                        <ul>
                            <li>- Sketch</li>
                            <li>- Painting</li>
                            <li>- Comic Strip</li>
                            <li>- Digital Art</li>
                        </ul>
                    </div>
                </div>
                <div className='sfdc-category-card'>
                    <img src={grid4} alt="grid"/>
                    <div className='card-details'>
                        <ul>
                            <li>- Infographic animation</li>
                            <li>- Motion Graphics</li>
                            <li>- 2D/3D Animation</li>
                        </ul>
                    </div>
                </div>
                <div className='sfdc-category-card'>
                    <img src={grid5} alt="grid"/>
                    <div className='card-details'>
                        <ul>
                            <li>- Short Film</li>
                            <li>- Video Essay</li>
                            <li>- Stop Motion</li>
                        </ul>
                    </div>
                </div>
                <div className='sfdc-category-card'>
                    <img src={grid6} alt="grid"/>
                    <div className='card-details'>
                        <ul>
                            <li>- Poster</li>
                            <li>- Powerpoint</li>
                            <li>- Photo Journal</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SfdcCategory;