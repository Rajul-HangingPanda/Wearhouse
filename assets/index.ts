// Banner images
import banner1 from './banner/banner1.png';
import banner2 from './banner/banner2.png';
import bg from './banner/bg.png';
import bg1 from './banner/bg1.png';
import bg2 from './banner/bg2.png';
import { StaticImageData } from "next/image";

// Sale images
import saleImage from './saled/sale.png';

// Agent images
import agentImage from './agent/image.png';

// Amenities images
import elevatorImage from './amenities/elevtaor.png';

// Location images
import locationImage from './loactions/loaction.png';

// Project location images
import projLocationImage from './projlocation/image.png';

// Property images
import propertyImage from './propert/image.png';

// Warehouse images
import Building1 from './warehouse/building1.jpeg';
import Buildingtwo from './warehouse/building2.jpeg';
import Building3 from './warehouse/building3.jpeg';
import Building4 from './warehouse/building4.jpeg';
import Building5 from './warehouse/building5.jpeg';
import Building6 from './warehouse/building6.jpeg';
import Building7 from './warehouse/building7.jpeg';
import warehouseIndustrial from './warehouse/industrial.png';
import warehouseShot1 from './warehouse/shot1.png';
import warehouseShot2 from './warehouse/shot2.png';
import warehouseShot3 from './warehouse/shot3.png';
import warehouseShot4 from './warehouse/shot4.png';
import warehouseDrone from './warehouse/drone.png';
import warehouseLayout from './warehouse/layout.png';
import warehouseArea from './warehouse/area.png';
import warehouseNewmark from './warehouse/newmark.png';
import warehouseLoc1 from './warehouse/loc1.jpeg';
import warehouseLoc2 from './warehouse/loc2.png';
import warehouseLoc3 from './warehouse/loc3.png';
import warehouseLoc4 from './warehouse/loc4.png';
import warehousePhase1 from './warehouse/phase1.png';
import warehousePhase2 from './warehouse/phase2.png';
import logo from './logo/newmark-logo-black.png';

// Gallery images (assets/gallery)
import gallery2 from './gallery/2.jpg';
import gallery3 from './gallery/3.jpg';
import gallery4 from './gallery/4.jpg';
import gallery5 from './gallery/5.jpg';
import gallery6 from './gallery/6.png';
import gallery7 from './gallery/7.png';
import gallery8 from './gallery/8.png';
import gallery10 from './gallery/10.png';
import gallery11 from './gallery/11.png';
import gallery12 from './gallery/12.png';
import gallery13 from './gallery/13.png';
import gallery14 from './gallery/14.png';
import gallery15 from './gallery/15.png';
import gallery16 from './gallery/16.jpg';
import gallery17 from './gallery/17.jpg';
import gallery18 from './gallery/18.jpg';
import gallery19 from './gallery/19.jpg';
import gallery20 from './gallery/20.jpg';
import gallery21 from './gallery/21.jpg';
import gallery22 from './gallery/22.jpg';
import gallery23 from './gallery/23.jpg';
import gallery24 from './gallery/24.jpg';
import gallery25 from './gallery/25.jpg';

/** Gallery images array for the gallery component (numeric order 2–8, 10–25) */
export const galleryImages:StaticImageData[] = [
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
];

//
// Warehouse videos - using paths instead of imports

// Export all images
export {
  banner1,
  banner2,
  bg,
  bg1,
  bg2,
  saleImage,
  agentImage,
  elevatorImage,
  locationImage,
  projLocationImage,
  propertyImage,
  // Warehouse images
  warehouseIndustrial,
  Building1,
  Buildingtwo,
  Building3,
  Building4,
  Building5,
  Building6,
  Building7,
  warehouseShot1,
  warehouseShot2,
  warehouseShot3,
  warehouseShot4,
  warehouseDrone,
  warehouseLayout,
  warehouseArea,
  warehouseNewmark,
  warehouseLoc1,
  warehouseLoc2,
  warehouseLoc3,
  warehouseLoc4,
  warehousePhase1,
  warehousePhase2,
  // galleryImages,
  // Logo
  logo,
  //
};

// Export saleImage as 'image' for backward compatibility
export { saleImage as image };
