function Pagination ({
    pageIfno,
    hanldePageChange,

}) {
  return (
    <div className="d-flex justify-content-center">
        <nav>
            <ul className="pagination">
              <li className={`page-item ${!pageIfno.has_pre && 'disabled'}`}>
                <a onClick={() => hanldePageChange(pageIfno.current_page - 1)} className="page-link" href="#">
                  上一頁
                </a>
              </li>
              
              {Array.from({length:pageIfno.total_pages}).map((_,index) => (
                <li className={`page-item ${pageIfno.current_page === index + 1 && 'active'}`}>
                  <a onClick={() => hanldePageChange(index + 1)} className="page-link" href="#">
                    {index + 1 }
                  </a>
                </li>
              ))}
              

              <li className={`page-item ${!pageIfno.has_next && 'disabled'}`}>
                <a onClick={() => hanldePageChange(pageIfno.current_page + 1)} className="page-link" href="#">
                  下一頁
                </a>
              </li>
            </ul>
        </nav>
    </div>
  )
}

export default Pagination