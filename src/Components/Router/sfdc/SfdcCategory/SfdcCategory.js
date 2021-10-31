import React from 'react';
import "./SfdcCategory.scss";
import { ReactComponent as IconWriting } from '../../../../assets/icon_writing.svg'; 
import { ReactComponent as IconRhetoric } from '../../../../assets/icon_rhetoric.svg';
import { ReactComponent as IconIllustrator } from '../../../../assets/icon_illustrator.svg';
import { ReactComponent as IconAnimation} from '../../../../assets/icon_animation.svg';
import { ReactComponent as IconCinema} from '../../../../assets/icon_cinema.svg';
import { ReactComponent as IconPoster} from '../../../../assets/icon_poster.svg';

const SfdcCategory = () => {
    return (
        <section className="sfdc-category">
            <div className="sfdc-category-list">
                <div className="sfdc-category-card text-center">
                    <IconWriting className="sfdc-category-icon"/>
                    <h5 className="mt-4">Writing</h5>
                    <p className="mt-4">Short paragraphs that relateto a story about a possible future without social problems. </p>
                </div>
                <div className="sfdc-category-card text-center">
                    <IconRhetoric className="sfdc-category-icon"/>
                    <h5 className="mt-4">Rhetoric</h5>
                    <p className="mt-4">Short paragraphs that relateto a story about a possible future without social problems. </p>
                </div>
                <div className="sfdc-category-card text-center">
                    <IconIllustrator className="sfdc-category-icon"/>
                    <h5 className="mt-4">Illustration</h5>
                    <p className="mt-4">Short paragraphs that relateto a story about a possible future without social problems. </p>
                </div>
                <div className="sfdc-category-card text-center">
                    <IconAnimation className="sfdc-category-icon"/>
                    <h5 className="mt-4">Animation</h5>
                    <p className="mt-4">Short paragraphs that relateto a story about a possible future without social problems. </p>
                </div>
                <div className="sfdc-category-card text-center">
                    <IconCinema className="sfdc-category-icon"/>
                    <h5 className="mt-4">Cinematography</h5>
                    <p className="mt-4">Short paragraphs that relateto a story about a possible future without social problems. </p>
                </div>
                <div className="sfdc-category-card text-center">
                    <IconPoster className="sfdc-category-icon"/>
                    <h5 className="mt-4">Poster Presentation</h5>
                    <p className="mt-4">Short paragraphs that relateto a story about a possible future without social problems. </p>
                </div>
            </div>
        </section>
    );
};

export default SfdcCategory;