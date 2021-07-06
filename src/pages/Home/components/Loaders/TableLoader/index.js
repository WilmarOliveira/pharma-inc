import ContentLoader from 'react-content-loader'

const TableLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={500}
    height={500}
    viewBox="0 0 500 500"
    backgroundColor="#ccc"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="17" rx="0" ry="0" width="480" height="40" /> 
    <rect x="7" y="73" rx="0" ry="0" width="480" height="40" /> 
    <rect x="7" y="136" rx="0" ry="0" width="480" height="40" /> 
    <rect x="7" y="193" rx="0" ry="0" width="480" height="40" /> 
  </ContentLoader>
)

export default TableLoader;

