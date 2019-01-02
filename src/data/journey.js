import React from 'react'
import { FaAward, FaPaperPlane } from 'react-icons/fa'

import Image1 from './../assets/images/image1.jpg'
import Image2 from './../assets/images/image2.jpg'
import Image3 from './../assets/images/image3.jpg'

const data = [
  {
    date: 'November 15th 2012',
    headline: 'Milestone 1',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image1,
    icon: <FaAward />,
  },
  {
    date: 'November 26th 2011',
    headline: 'Milestone 2',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image2,
    icon: <FaPaperPlane />,
  },

  {
    date: 'June 6th 2011',
    headline: 'Milestone 3',
    description: `ulputate sapien nec sagittis aliquam
    malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et
    ligula ullamcorper.`,
    image: Image3,
    icon: <FaPaperPlane />,
  },
]

export default data
