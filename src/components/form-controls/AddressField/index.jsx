import { Stack } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import SelectField from '../SelectField'
import TextInputField from '../TextInputField'

AddressField.propTypes = {
   name: PropTypes.string.isRequired,
   control: PropTypes.object.isRequired,
   provinceList: PropTypes.array.isRequired,
   districtList: PropTypes.array.isRequired,
   wardList: PropTypes.array.isRequired,
   disabled: PropTypes.bool,
   onChangeProvince: PropTypes.func.isRequired,
   onChangeDistrict: PropTypes.func.isRequired
}

function AddressField({
   name,
   control,
   disabled,
   provinceList,
   districtList,
   wardList,
   onChangeProvince,
   onChangeDistrict
}) {
   return (
      <Stack>
         <TextInputField
            label="Street"
            name={`${name}.street`}
            control={control}
         />
         <Stack direction="row" spacing={2} alignItems="baseline">
            <SelectField
               label="Province"
               name={`${name}.province`}
               control={control}
               disabled={disabled}
               customHandleChange={onChangeProvince}
               options={provinceList}
            />
            <SelectField
               label="District"
               name={`${name}.district`}
               control={control}
               disabled={disabled}
               customHandleChange={onChangeDistrict}
               options={districtList}
            />
            <SelectField
               label="Ward"
               name={`${name}.ward`}
               control={control}
               disabled={disabled}
               options={wardList}
            />
         </Stack>
      </Stack>
   )
}

export default AddressField
