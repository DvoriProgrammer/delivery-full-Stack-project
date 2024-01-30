package com.javatpoint.service;

import com.javatpoint.dto.CommentDTO;
import com.javatpoint.dto.DeliveryDTO;
import com.javatpoint.dto.UserDTO;
import com.javatpoint.model.Coments;
import com.javatpoint.model.Delivery;
import com.javatpoint.model.User;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-01-30T20:43:56+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_111 (Oracle Corporation)"
)
@Component
public class MapStructMapperImpl implements MapStructMapper {

    @Override
    public List<UserDTO> userToDto(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<UserDTO> list = new ArrayList<UserDTO>( users.size() );
        for ( User user : users ) {
            try {
                list.add( userDTO( user ) );
            }
            catch ( IOException e ) {
                throw new RuntimeException( e );
            }
        }

        return list;
    }

    @Override
    public DeliveryDTO todto(Delivery d) {
        if ( d == null ) {
            return null;
        }

        DeliveryDTO deliveryDTO = new DeliveryDTO();

        deliveryDTO.setPostingDate( d.getPostingDate() );
        try {
            deliveryDTO.setChosenUser( userDTO( d.getChosenUser() ) );
        }
        catch ( IOException e ) {
            throw new RuntimeException( e );
        }
        deliveryDTO.setId( d.getId() );
        deliveryDTO.setFromWhere( d.getFromWhere() );
        deliveryDTO.setToWhere( d.getToWhere() );
        deliveryDTO.setPrice( d.getPrice() );
        deliveryDTO.setSize( d.getSize() );
        deliveryDTO.setStatus( d.isStatus() );
        deliveryDTO.setRecognaize( d.getRecognaize() );
        deliveryDTO.setDateTime( d.getDateTime() );
        deliveryDTO.setRequesHour( d.getRequesHour() );
        try {
            deliveryDTO.setUserId( userDTO( d.getUserId() ) );
        }
        catch ( IOException e ) {
            throw new RuntimeException( e );
        }
        deliveryDTO.setComents( todtoComment2( d.getComents() ) );

        return deliveryDTO;
    }

    @Override
    public List<DeliveryDTO> todto2(List<Delivery> d) {
        if ( d == null ) {
            return null;
        }

        List<DeliveryDTO> list = new ArrayList<DeliveryDTO>( d.size() );
        for ( Delivery delivery : d ) {
            list.add( todto( delivery ) );
        }

        return list;
    }

    @Override
    public CommentDTO todtoComment(Coments d) {
        if ( d == null ) {
            return null;
        }

        CommentDTO commentDTO = new CommentDTO();

        commentDTO.setId( d.getId() );
        commentDTO.setComent( d.getComent() );
        commentDTO.setScore( d.getScore() );
        commentDTO.setStatus( d.getStatus() );
        try {
            commentDTO.setUserId( userDTO( d.getUserId() ) );
        }
        catch ( IOException e ) {
            throw new RuntimeException( e );
        }

        return commentDTO;
    }

    @Override
    public List<CommentDTO> todtoComment2(List<Coments> d) {
        if ( d == null ) {
            return null;
        }

        List<CommentDTO> list = new ArrayList<CommentDTO>( d.size() );
        for ( Coments coments : d ) {
            list.add( todtoComment( coments ) );
        }

        return list;
    }
}
