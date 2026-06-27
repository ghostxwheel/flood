import UserInDatabase3 from './01-UserInDatabase3';
import HistoryEra from './02-HistoryEra';

const migrations = [UserInDatabase3, HistoryEra];

const migrate = async () => {
  for await (const migrate of migrations) {
    await migrate();
  }
};

export default migrate;
