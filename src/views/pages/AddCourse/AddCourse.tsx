
import { FunctionComponent, useEffect, useState } from "react";
import { Item } from "app/service/GridItem";
import { Box, Grid, InputLabel, MenuItem, Typography } from "@mui/material";
import Input from '@mui/joy/Input';
import { CssVarsProvider } from '@mui/joy/styles';
import { Button, FormControl, FormLabel, Textarea } from "@mui/joy";
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
// import Select, { selectClasses } from '@mui/joy/Select';
import elearn from "assets/images/e-learning2.jpg"
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup"
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux';
import { catalog, catalogList } from "features/course/store/slice";
import { addCourse } from "features/courses/store/slice";


type FormValues = {
  course_name: string,
  aliases: string,
  tuition: string,
  description: string,
  catalog: { value: string, label: string };

}

const schema = Yup.object().shape({
  course_name: Yup.string().required("Please enter the course name"),
  aliases: Yup.string().required("Please enter the aliases"),
  tuition: Yup.string().required("Please enter the tuition"),
  description: Yup.string().required("Please enter the description"),
  catalog: Yup.object().shape({
    value: Yup.string().required("Please chooses the catalog"),
    label: Yup.string().required("Please chooses the catalog"),
  })
})


const AddCourse: FunctionComponent = () => {
  const { register, control, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      course_name: '',
      aliases: '',
      tuition: '',
      description: '',
      catalog: { label: '', value: '' },
    },
    resolver: yupResolver(schema)

  })
  const dispatch = useDispatch();
  const catalogData = useSelector(catalogList);

  useEffect(() => {
    dispatch(catalog(''))
  }, [dispatch])

const mappingData = ()=>{
  const data = [...catalogData]
  let catalogClone= data.map((item) => (
    {
      value: item.id,
      label: item.catalog_name
    }
  ))
  return catalogClone;

}
 
  const onSubmit = (data: FormValues) => {
    const rs = {
      name: data?.course_name,
      aliases: data?.aliases,
      tuition: data?.tuition,
      description: data?.description,
      catalog_id: data?.catalog.value,
      maker_id:"nhutscb1"
    }
    dispatch(addCourse(rs))
    console.log("ressssssss",rs)
    handleRest()
  }

  const handleRest = () => {
    setValue('course_name', '');
    setValue('aliases', '');
    setValue('tuition', '');
    setValue('description', '');
    setValue('catalog', { label: '', value: '' })
  }

  return (
    <>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <Item >
            <img src={elearn} width="100%" height="100%" alt="" />
          </Item>
        </Grid>


        <Grid item xs={8}>
          <Item>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>Add new courses </Typography>

            <form onSubmit={handleSubmit(onSubmit)} >
              <CssVarsProvider>

                <FormControl>
                  <FormLabel>1. Course name</FormLabel>
                  <Input autoComplete="off" placeholder="Enter course name" sx={{
                    ".MuiInput-variantOutlined": {
                      outline: "none"
                    },
                    "Mui-focused": {
                      InputFocusedHighlight: "#fff"
                    }
                  }}
                    {...register("course_name")}
                  />
                  {errors.course_name && <span style={{ color: "red" }}>Please enter the course name</span>}
                </FormControl>

                <FormControl className="mt-4">
                  <FormLabel>2. Aliases</FormLabel>
                  <Input autoComplete="off" placeholder=" Enter aliases"
                    {...register("aliases")} />
                  {errors?.aliases && <span style={{ color: "red" }}>{errors.aliases.message}</span>}
                </FormControl>

                <FormControl className="mt-4">
                  <FormLabel>2. Tuition</FormLabel>
                  <Input autoComplete="off" placeholder=" Enter tuition"
                    {...register("tuition")}
                  />
                  {errors?.tuition && <span style={{ color: "red" }}>{errors.tuition.message}</span>}
                </FormControl>

                <FormControl className="mt-4">
                  <FormLabel>3. Desription</FormLabel>
                  <Textarea minRows={3} placeholder="Enter description"
                    {...register("description")}
                  />

                  {errors?.description && <span style={{ color: "red" }}>{errors.description.message}</span>}
                </FormControl>

                <FormControl className="mt-4">
                  <FormLabel>4. Catalog</FormLabel>
                  <Box width="30%">
                    <Controller
                      name="catalog"
                      control={control}
                      render={({ field }) => <Select
                        {...register("catalog")}
                        {...field}
                        options={[
                          ...mappingData()
                        ]}
                      />}
                    />
                    {errors?.catalog && <span style={{ color: "red" }}>{errors.catalog.value?.message}</span>}
                  </Box>
                </FormControl>
              </CssVarsProvider>

              <Box
                className="mt-4"
                sx={{ textAlign: "right" }}>
                <CssVarsProvider>

                  <Button
                    onClick={handleRest} sx={{
                      backgroundColor: "#c6c7c8", marginRight: "10px",
                      "&:hover": {
                        backgroundColor: "#c6c7c8",
                      }
                    }}  >
                    Rest
                  </Button>
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: "#000", "&:hover": {
                        backgroundColor: "#000",
                      }
                    }} >
                    Save
                  </Button>

                </CssVarsProvider>
              </Box>
            </form>
          </Item>
        </Grid>
      </Grid >
    </>
  )
}
export default AddCourse;
