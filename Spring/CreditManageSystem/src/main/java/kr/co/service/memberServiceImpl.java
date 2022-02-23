package kr.co.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.dao.memberDAO;
import kr.co.vo.memberVO;

@Service
public class memberServiceImpl implements memberService{
	
	@Inject
	memberDAO dao;
	
	//ȸ������
	@Override
	public void register(memberVO vo) throws Exception {
		dao.register(vo);
	}
	
	// �α���
	@Override
	public memberVO logIn(memberVO vo) throws Exception {
		return dao.logIn(vo);
	}
}
