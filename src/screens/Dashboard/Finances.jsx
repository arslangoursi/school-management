import { Edit2, Trash2 } from "react-feather";
import AmountEntry from "../../components/AmountEntry";
import FinanceButtonEntry from "../../components/FinanceButtonEntry";

export default function Finances() {
  return (
    <>
      <div className="dashboard__heading">
        <div className="dashboard__logo">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8979 12.2127C13.8979 10.6299 13.8885 9.04714 13.9011 7.46434C13.9074 6.47115 14.1376 6.2536 15.1213 6.24729C15.8086 6.24414 16.496 6.24099 17.1833 6.25045C17.9495 6.26306 18.1797 6.47746 18.2553 7.24048C18.2711 7.40444 18.2711 7.5747 18.2711 7.73865C18.2711 10.8002 18.2743 13.8617 18.2711 16.9233C18.2711 18.0583 18.0473 18.2759 16.9216 18.2822C16.3163 18.2854 15.714 18.2885 15.1087 18.279C14.1817 18.2664 13.9169 18.0268 13.9074 17.0841C13.8853 15.4603 13.9011 13.8365 13.8979 12.2127C13.9011 12.2127 13.9011 12.2127 13.8979 12.2127Z"
              fill="#F13A51"
            />
            <path
              d="M2.80966 9.74073C4.04563 10.1285 5.03882 9.46957 5.79238 8.20838C6.11083 7.67553 6.58062 7.23727 6.94952 6.73594C7.22698 6.35759 7.58327 6.23147 8.03099 6.24093C8.59537 6.25354 9.16291 6.19363 9.71783 6.25354C10.5565 6.34497 11.1808 6.07697 11.742 5.44007C12.4294 4.65813 13.1987 3.95186 13.9428 3.21722C14.2487 2.91454 14.3748 2.67806 13.9964 2.28709C13.5487 1.82361 13.6874 1.26553 14.2896 1.03536C15.2639 0.663312 16.254 0.329095 17.2534 0.0390215C17.8998 -0.147004 18.3854 0.357473 18.193 1.01329C17.9093 1.99387 17.5814 2.96183 17.2282 3.92034C16.9981 4.54463 16.4463 4.6802 15.9355 4.21671C15.5729 3.8888 15.368 3.95817 15.0653 4.27032C14.0626 5.30134 13.0285 6.30398 12.0227 7.33501C11.7074 7.65976 11.3637 7.81111 10.916 7.79849C10.1656 7.77958 9.41199 7.81741 8.66474 7.78588C8.23909 7.76696 7.97109 7.93407 7.722 8.26198C7.06303 9.12274 6.36622 9.95513 5.70094 10.8127C5.4487 11.1375 5.14287 11.292 4.73613 11.292C3.46233 11.2857 2.19168 11.3015 0.917879 11.2857C0.334579 11.2794 -0.0406254 10.9452 0.0035163 10.4848C0.0571169 9.95828 0.397638 9.73442 0.90842 9.73442C1.45388 9.74388 1.9962 9.74073 2.80966 9.74073Z"
              fill="#F13A51"
            />
            <path
              d="M12.6763 13.7133C12.6763 14.8988 12.6826 16.0875 12.6731 17.273C12.6668 17.9667 12.4398 18.2315 11.7493 18.263C10.9169 18.2977 10.0814 18.2977 9.25215 18.2599C8.59002 18.2284 8.35986 17.9667 8.3567 17.3108C8.34724 14.8736 8.34724 12.4363 8.3567 10.0022C8.35986 9.32751 8.57426 9.08473 9.249 9.0532C10.0814 9.01536 10.9138 9.01536 11.7462 9.05004C12.4493 9.07842 12.6668 9.32435 12.6731 10.0275C12.6826 11.254 12.6763 12.4836 12.6763 13.7133Z"
              fill="#F13A51"
            />
            <path
              d="M10.5362 19.4994C13.6009 19.4994 16.6624 19.4994 19.7271 19.4994C19.9573 19.4994 20.1874 19.4931 20.4113 19.5341C20.7896 19.6034 20.9914 19.8746 21.0167 20.234C21.0419 20.6029 20.8559 20.8867 20.487 20.9844C20.2694 21.0412 20.0361 21.0538 19.8091 21.0538C13.6198 21.0569 7.43048 21.0569 1.24119 21.0569C1.09616 21.0569 0.947967 21.0632 0.80293 21.0475C0.333137 20.9939 -0.00738469 20.7606 0.0146861 20.2561C0.036757 19.7674 0.355207 19.512 0.847072 19.5088C2.18078 19.5025 3.51449 19.5025 4.8482 19.5025C6.74313 19.4994 8.63807 19.4994 10.5362 19.4994Z"
              fill="#F13A51"
            />
            <path
              d="M2.75999 15.372C2.75999 14.7288 2.73792 14.0824 2.7663 13.4392C2.79467 12.8023 3.06898 12.5375 3.70904 12.5217C4.54142 12.5028 5.37381 12.5154 6.20304 12.5217C6.74851 12.5249 7.06065 12.796 7.08903 13.3541C7.15524 14.7036 7.14893 16.0562 7.09218 17.4057C7.06696 17.9732 6.74535 18.279 6.16521 18.279C5.35489 18.2822 4.54142 18.2948 3.73111 18.2759C3.07529 18.2601 2.78837 17.9764 2.75999 17.3079C2.73477 16.6616 2.75684 16.0184 2.75999 15.372C2.75684 15.372 2.75684 15.372 2.75999 15.372Z"
              fill="#F13A51"
            />
          </svg>
          <div className="dashboard__title">Financials</div>{" "}
        </div>
      </div>
      <div className="financial__buttons">
        <FinanceButtonEntry text="Pay to Staff" />
        <FinanceButtonEntry text={"Add \n Custom Expense"} />
        <FinanceButtonEntry text={"Add \n Custom Income"} />
      </div>
      <div className="financial__table">
        <div className="financial__table__header">
          <AmountEntry style={{ backgroundColor: "#222A5A", color: "white" }} />
          <AmountEntry
            style={{ border: "1px solid #5F60ED", color: "#5F60ED" }}
          />
        </div>
        <div className="container__main__content__listing__table__finaces">
          <div className="container__main__content__listing__table__header">
            <div className="container__main__content__listing__table__header__entry">
              Trans ID{" "}
            </div>

            <div className="container__main__content__listing__table__header__entry">
              Paid To
            </div>
            <div className="container__main__content__listing__table__header__entry">
              Date
            </div>
            <div className="container__main__content__listing__table__header__entry">
              Amount{" "}
            </div>
            <div className="container__main__content__listing__table__header__entry">
              Month
            </div>
            <div className="container__main__content__listing__table__header__entry">
              Type
            </div>
          </div>
          <div className="container__main__content__listing__table__content">
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
          </div>
        </div>
      </div>
    </>
  );
}

function TableEntry({}) {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        4543
      </div>

      <div className="container__main__content__listing__table__content__list__entry">
        Mehfooz ur Rehmaan
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        24 - 11 - 1996{" "}
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        56000 RS
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        24 - 11 - 1996
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        Teacher
      </div>
    </div>
  );
}
