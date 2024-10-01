

export default function Task() {
    return (
        <>
            <div className="sec-task sp4" id="task">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="task-img" data-tilt>
                                <img src="/assets/img/image/task-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="hadding task-hadding">
                                <div className="hadding-span" data-aos="zoom-out" data-aos-duration={900}>
                                    <img src="/assets/img/icons/titel-icon-5.svg" alt="" />
                                </div>
                                <h1 className="font-30 font-lg-42 hadding-c1 weight-700 line-height-38 line-height-lg-50 font-f-1" data-aos="fade-left" data-aos-duration={600}>
                                    A <span className="after">task manager</span> <br />
                                    you can trust for <br />
                                    life saving.
                                </h1>
                                <div className="space24" />
                                <p className="font-20 pera-c-1 weight-400 line-height-p-30 font-f-2" data-aos="fade-left" data-aos-duration={900}>
                                    TeamGantt’s free gantt chart software lets you keep all your
                                    tasks, documents, and conversations in a single centralized hub.
                                    Storing important information together in your gantt chart tool
                                    means you and your team can always find your project's latest
                                    files, chats, and updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
