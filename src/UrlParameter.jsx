import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  //useLocationでURLの？以降の文字列を取得する
  const { search } = useLocation();
  //URLSearchParamsにはたくさんメソッドが存在する
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは{id}です</p>
      <p>クエリパラメータは{query.get("name")}です</p>
    </div>
  );
};
