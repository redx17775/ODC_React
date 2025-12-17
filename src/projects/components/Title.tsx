type Props = {
    name: string;
}

export const Title = ({name}:Props) => {
  return (
    <div className="text-4xl text-bold text-blue-700">
        {!name? "null name" : name}
    </div>
  )
}
