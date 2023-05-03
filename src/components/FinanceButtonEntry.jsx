export default function FinanceButtonEntry({ text, onClick }) {
  return (
    <div
      className="financial__buttons__btn"
      style={{ whiteSpace: "pre-line" }}
      onClick={onClick}
    >
      {text}
      <svg
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 15L8.54971 8.45029L2 1.90058"
          stroke="white"
          strokeWidth="2.45614"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
