

export default function Hero() {
    return (
        <>
            <div className="hero-area hero-1 _relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-5">
                            <div className="home2-hero-hadding">
                                <div className="hadding1">
                                    <h1 className="font-f-1 weight-700 font-40 font-lg-80 line-height-48 line-height-lg-86" data-aos="fade-right" data-aos-duration={600}>
                                        <span className="after">Organize</span> your life with one tool.
                                    </h1>
                                    <div className="space24" />
                                    <p className="font-20 font-f-2 weight-400 line-height-p-30 pera-c-1" data-aos="fade-right" data-aos-duration={900}>
                                        Remember everything and tackle any project with your notes,
                                        tasks, and schedule all in one place.
                                    </p>
                                </div>
                                <div className="space40" />
                                <form action="#" data-aos="fade-right" data-aos-duration={1200}>
                                    <div className="header-input-form">
                                        <input type="email" name="email" placeholder="Enter email address" />
                                        <div className="input-form-btn button1 font-f-1">
                                            <button>Start for free</button>
                                        </div>
                                        <div className="space10" />
                                        <div className="pera-c-1 font-14 font-f-2 weight-400">
                                            <p>
                                                No subscription. No annual fees. No credit card required.
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home1-main-hero-img" data-tilt>
                    <img src="/assets/img/image/home1-hero-img.png" alt="" />
                </div>
            </div>

        </>

    )
}
