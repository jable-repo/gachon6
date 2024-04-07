import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Carrer from "./_component";

export default function Home() {
  return (
    <main>
      <div className={styles.resume_subject}>
        <h2>
          서영석 포트폴리오
        </h2>
      </div>

      <div className={styles.profile_data}>
        <div className={styles.image_margin}>
          <Image
            
            src="/profile/sys_0405.png"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.image_left}>
          <div className={styles.image_test}>
            <div className={styles.profile_info_general_name}>서영석</div>
            <div className={styles.profile_info_general_year}>
              남 2002년 (만 21세)
            </div>
          </div>
          <div className={styles.profile_info_detail}>
            <div class={styles.profile_label}>Mobile | 010-2050-9127</div>
            <div class={styles.profile_label}>E-mail | dudtjr5500@gachon.ac.kr</div>
            <div class={styles.profile_label}>Tel | 02-555-1231</div>
            <div class={styles.profile_label}>
              주소 | 서울 강남구 언주로 81길 13
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={styles.grid_container}>
          <div>
            <div className={styles.grid_item}>(학력)</div>
            <div className={styles.grid_item}>가천대 </div>
            <div className={styles.grid_item}>
              <div>재학중 / 대학교(4년제)</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>(경력)</div>
            <div className={styles.grid_item}>컨트롤웍스</div>
            <div className={styles.grid_item}>
              <div>재직중 / 7개월</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>
              전문분야
            </div>
            <div className={styles.grid_item}>자동차 관련 HILS 제작</div>
            <div className={styles.grid_item}>자동차 상태평가 및 문서작업 등</div>
          </div>

          <div>
            <div className={styles.grid_item}>자격증</div>
            <div className={styles.grid_item}>자동차진단평가사 2급</div>
            <div className={styles.grid_item}>문서실무사 3급</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.keyword_box}>
          <Link href="http://localhost:3000">
            <button type="button" className={styles.list_btn}>
              <span className={styles.btn_gap}>MAIN</span>
            </button>
          </Link>
        </div>
      </section>
      <section>
        <h1 className={styles.school_title}>학력</h1>
        <div className={styles.school_title_grid_margin}>
          <div className={styles.school_title_grid}>
            <div>
              <div>2021. 03 ~</div>
              <div>재학</div>
            </div>
            <div>
              <div>
                <div>가천대학교</div>
                <div>미래자동차학과</div>
              </div>
              <div>
                <div>
                  <div>
                    <div>3학년</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.school_title_grid}>
            <div>
              <div>2020</div>
              <div>졸업 </div>
            </div>
            <div>
              <div>
                <div>인천대건고등학교 </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carrer />
    </main>
    
  );
}
