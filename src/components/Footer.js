import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className={"container"}>
                <div className={'row'}>
                    <div className="col-2">
                        <div className="box">
                            <p>
                                © 2023 TheCocktailDB.
                                Proudly built in the UK
                            </p>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="box d-flex justify-content-center gap-3">
                            <a href="#"><img src="/logo-tmdb.png" alt=""/></a>
                            <a href="#"><img src="/logo-tadb.png" alt=""/></a>
                            <a href="#"><img src="/logo-tsdb.png" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="box d-flex gap-4">
                            <a href="#">Missing</a>
                            <a href="#">About</a>
                            <a href="#">Faq</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;