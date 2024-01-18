import { Diagnosis, Patient } from '../../types';
import { useParams } from 'react-router-dom';

interface Props {
  patients: Patient[];
  diagnoses: Diagnosis[];
}

const PatientPage = ({ patients, diagnoses }: Props) => {
  const id = useParams().id;
  const patient = patients.find(p => p.id === id);
  if (!patient) return null;
  console.log(diagnoses);
  return (
    <div>
      <b>{patient.name}</b>
      <br/>
      <span>{patient.occupation}</span>
      <br/>
      <p>Entries:</p>
      {patient.entries.map(entry => (
        <div>
          <p>{entry.date} {entry.description}</p>
          <div>
            {entry.diagnosisCodes?.map(code => (
              <p>{code}: {diagnoses.find(d => d.code === code)?.name}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientPage;