import styles from "./page.module.css";

export default function Carrer() {
  return (
    <>
      <section>
        <div className={styles.back_white}>
          <div className={styles.school_title_top}>
            <h1 className={styles.school_title}>경력 </h1>
            <div className={styles.school_title_down}>
              <div>7개월</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.carrer_top}>
          <div>
            <div>2023. 09 ~</div>
            <br />
            <div>7개월</div>
          </div>
          <div>
            <div>컨트롤웍스</div>
            <br />
            <div>시스템팀</div>
            <br />
            <div>연구원</div>
          </div>
          <div>
            <div>
              <div>(주요직무)</div>
              <div>
                - HILS장비의 설계와 시험 검증을 담당하는 시스템팀에서 전장파트쪽 분야에 일하고 있습니다.
                <br />
                - 현재는 팀 내에 지원인력으로서의 역할을 주로 하고있습니다.
                <br />
                - 사내 장비 테스트, 출고전 점검 시험, 현장 A/S 또는 고객사 추가요청 작업 등 다양한
                분야에서 지원 업무를 진행하고 있습니다.
                <br />
                - 또한 장비 제작에 필요한 정보나 자료들을 문서 및 데이터화하여 정리하는 업무도 함께
                진행하고 있습니다.
                <br />
                - 자동차를 제작하기 위해 연구하는 데 필요한 HILS장비를 주로 제작하고 있으며, 현재 진행중인 프로젝트에는
                <br />
                BMS, MCU, V2L, SBCM과 같은 배터리, 모터, 전력분배시스템이나, 제어기류와 관련된 프로젝트의 장비 제작을 진행하고 있습니다.
                <br />
                - 포털사이트에서 "컨트롤웍스" 검색 또는 "www.control-works.co.kr"을 참고해 주시기 바랍니다.
                <br />
                - 혹시 제게 문의가 있으시다면 010-2050-9127로 연락주시면
                감사하겠습니다.
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
