import { useParams } from "react-router-dom";

function findQuoteById(data, id) {
  let quote = null;
  // data.quotes.map((item) => {
  //   if (item.quoteId == id) {
  //     quote = item;
  //   }
  // });
  Object.values(data.quotes).forEach((item) => {
    if (item.quoteId === id) {
      quote = item;
    }
  });
  return quote;
}

function QuoteId() {
  const params = useParams();
  const quoteId = parseInt(params.id); // Lấy quoteId từ URL

  const data = localStorage.getItem("quoteData");
  const quoteData = JSON.parse(data);
  const quote = findQuoteById(quoteData, quoteId);
  console.log("aaa");
  return (
    <>
      <div>
        <p>{quote.content}</p>
      </div>
    </>
  );
}
export default QuoteId;
