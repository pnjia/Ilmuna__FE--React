import './Course.css'

export const Course = () => {
    return (
        <>
            <div className="sidebar">
                <div className='sidebar__logo'><h1>Ilmuna.</h1></div>
                <h3>Daftar isi</h3>
                <div className="course__title"><a href="http://">Judul</a></div>
                <div className="course__title"><a href="http://">Judul</a></div>
                <div className="course__title"><a href="http://">Judul</a></div>
                <div className='certificate__btn'>
                    <button>Claim certificate</button>
                </div>
            </div>
            <div className="course__container">
                <div className="course">
                    <div className="course__video__title">
                        <h1>Judul</h1>
                    </div>
                    <div className="course__video">

                    </div>
                    <div className="pagination">
                        <div className="prev__btn"><button>Left button</button></div>
                        <div className="next__btn"><button>Right button</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

