import {Device} from "../../common/classes.ts";



type Props = {
    device: Device
}

const DeviceTile = ({device}:Props) => {

  return (
      <div className="bg-white p-8 flex flex-col shadow gap-2 rounded">
          <div>
              <span>Device Id: {device.id}</span>
          </div>
          <div>
              <span>Device Status: {device.status}</span>
          </div>
          <div className="flex items-center justify-around">
              <button className="bg-green-500 hover:bg-green-700 rounded px-4">on</button>
              <button className="bg-red-500 hover:bg-red-700 rounded px-4">off</button>
          </div>
      </div>
  )
}

export default DeviceTile