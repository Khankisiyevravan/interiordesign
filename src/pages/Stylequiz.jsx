import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import StylequizImage from '../images/stylequiz.jpg';
import DesignEditRepeat from '../images/DesignEditRepeat.jpg';
function Stylequiz() {
    return (
        <>
            <Header />
            <section className='sec1'>
                <div className="row3-bg stylequiz">
                    <div className="text">
                        <h3>
                            Sizin dizayn stiliniz nədir ?
                        </h3>
                        <p>
                            Siz hələdə hansı dizayn sevdiyinizi bilmirsiz ?
                            Şəxsi dizayn tərzinizi müəyyən etmək üçün köməyə ehtiyacınız var? Oradakı bütün ilhamla, üslubunuzu ortaya çıxarmaq böyük ola bilər. Daxil edin: Interyer dizayn stili viktorina. Sürətli, pulsuz stil viktorinamız sizə bir neçə dəqiqə və ya daha az müddətdə daxili dizayn tərzinizi təyin etməyə kömək edəcək.
                        </p>
                        <button className='btn-header'>
                            <Link to='/stylequiz/room'>
                                Stilini kəşfet
                            </Link>
                        </button>
                    </div>
                    <div className='image'>
                        <img src={StylequizImage} alt="" />
                    </div>
                </div>
                <div className="row-4">
                    <h3>
                        Möhtəşəm Virtual Dizayn
                    </h3>
                    <p>
                        3D dizaynlarımız, immersiv virtual turlarımız və innovativ texnologiyamızla heç bir şey təxəyyülə buraxılmır. Yeni otağınızın tam olaraq necə görünəcəyini yaşayacaqsınız.
                    </p>
                    {/* <iframe src="" frameborder="0"></iframe> */}
                    <iframe src="https://player.vimeo.com/video/681100567?h=a075927b2b&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;transparent=0&amp;background=&amp;app_id=122963" className="elementor-background-video-embed"></iframe>
                </div>
                <div className="row3-bg">
                    <div className="image">
                        <img src={DesignEditRepeat} alt="" />
                    </div>
                    <div className="text">
                        <h3>
                            Design. Edit. Repeat.
                        </h3>
                        <p>
                            Dizayneriniz ilhamınızı və vizyonunuzu moodboard və fərdi dizayn konsepsiyalarına çevirəcək. Oradan məkanınızın 3D dizaynlarını əldə edəcəksiniz, hər şey düzgün olana qədər onlara yenidən baxıla bilər.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Stylequiz