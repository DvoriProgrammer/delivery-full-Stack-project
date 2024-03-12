package com.javatpoint.service;
import com.javatpoint.dto.CommentDTO;
import com.javatpoint.dto.DeliveryDTO;
import com.javatpoint.dto.UserDTO;
import com.javatpoint.model.Coments;
import com.javatpoint.model.Delivery;
import com.javatpoint.model.User;
import org.mapstruct.Mapper;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;
@Mapper(componentModel = "spring")
public interface MapStructMapper {
     List<UserDTO> userToDto(List<User> users);
    default UserDTO userDTO(User u) throws IOException {
        if(u!=null){
            UserDTO userDTO = new UserDTO();
            userDTO.setId(u.getId());
            userDTO.setDeliverCount(u.getDeliverCount());
            userDTO.setDeliveredCount(u.getDeliveredCount());
            userDTO.setEmail(u.getEmail());
            userDTO.setFirstName(u.getFirstName());
            userDTO.setLevel(u.getLevel());
            userDTO.setPassword(u.getPassword());
            userDTO.setLastName(u.getLastName());
            userDTO.setPhone(u.getPhone());
            userDTO.setStatus(u.isStatus());
            Path filename= Paths.get(u.getImg());
            byte [] byteImage=Files.readAllBytes(filename);
            userDTO.setImg(Base64.getEncoder().encodeToString(byteImage));
            return userDTO;
        }
       return null;
    }
    DeliveryDTO todto(Delivery d);
    List<DeliveryDTO> todto2(List<Delivery> d);
    CommentDTO todtoComment(Coments d);
    List<CommentDTO> todtoComment2(List<Coments> d);
}