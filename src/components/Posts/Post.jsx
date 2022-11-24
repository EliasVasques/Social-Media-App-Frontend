import { Card, Typography, Box, Button } from "@mui/material";
import styled from "styled-components";

const Post = () => {
    return ( <div>
            <StyledCard>
                <Img src="data:image/jpeg;base64,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" />
                <Box component="div" p={2}>
                    <Box component="div" sx={{
                        marginBottom: "20px"
                    }}>
                        <Typography variant="h6" component="h3">Sunset</Typography>
                        <Typography variant="body2" component="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nisi modi voluptatum nulla deleniti error illum necessitatibus rerum dolorum, veritatis, ea cupiditate delectus aliquid. Necessitatibus quam ducimus sapiente accusantium autem?</Typography>
                    </Box>
                    <Box component="div" sx={{
                        position: "absolute",
                        left: 0,
                        bottom: 0
                    }}>
                        <Button size="small" sx={{ fontSize: "12px"}}>Share</Button>
                        <Button size="small" sx={{ fontSize: "12px"}}>Learn more</Button>
                    </Box>
                </Box>
            </StyledCard>

    </div> );

}

export default Post;

const Img = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`

const StyledCard = styled(Card)`
    width: 100%;
    height: 400px;
    position: relative;
    margin: auto 0;
    margin-bottom: 60px;

    @media(max-width: 900px) {
        height: auto;
    }
`