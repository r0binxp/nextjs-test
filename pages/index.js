import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MaterialTable from 'material-table';






export default function Home() {
 
  const [data, setData] = React.useState([{ name: 'Mehmet', email: 'Baran', website: 1987, phone: 63 },
  {
    name: 'Zerya Betül',
    email: 'Baran',
    website: 2017,
    phone: 34,
  }])
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'email', field: 'email' },
      { title: 'website', field: 'website'},
      { title: 'Phone', field: 'phone'},
    ],
  });
  React.useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data)
      }
  )
    
  },[setData])
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App op</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <main className={styles.main}>
            <MaterialTable
              title="Users"
              columns={state.columns}
              data={data}
              options={{sorting: true}}
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        setState((prevState) => {
                          const data = [...prevState.data];
                          data[data.indexOf(oldData)] = newData;
                          return { ...prevState, data };
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
              }}
          />
      </main>

    </div>
  )
}
