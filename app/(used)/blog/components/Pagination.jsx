export default function Pagination({
    prev,
    currentPage,
    getPaginationGroup,
    next,
    pages,
    handleActive,
}) {
    return (
        <>



            <div className="space60" />
            <div className="row">
                <div className="col-12 m-auto">
                    <div className="theme-pagination text-center">
                        <ul>
                            {getPaginationGroup.length <= 0 ? null : (
                                <li onClick={prev} className="next_link page-item">
                                    {currentPage === 1 ? null : (
                                        <a>
                                            <i className="fa-solid fa-angle-left" />
                                        </a>
                                    )}
                                </li>
                            )}

                            {getPaginationGroup.map((item, index) => {
                                return (
                                    <li
                                        onClick={() => handleActive(item)}
                                        key={index}
                                        className={
                                            currentPage === item
                                                ? "page-item active"
                                                : "page-item"
                                        }
                                    >
                                        <a className="page-link">{item}</a>
                                    </li>
                                )
                            })}

                            {getPaginationGroup.length <= 0 ? null : (
                                <li onClick={next} className="next_link page-item">
                                    {currentPage >= pages ? null : (
                                        <a>
                                            <i className="fa-solid fa-angle-right" />
                                        </a>
                                    )}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>



        </>
    )
}